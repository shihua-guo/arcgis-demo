/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import watchUtils = require("esri/core/watchUtils");
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");
import HandleRegistry = require("esri/core/HandleRegistry");
import { accessibleHandler, renderable, cssTransition, tsx } from "esri/widgets/support/widget";

import BookmarksViewModel = require("./Bookmarks/BookmarksViewModel");
import BookmarkItem = require("./Bookmarks/BookmarkItem");

import MapView = require("esri/views/MapView");

import i18n = require("dojo/i18n!./Bookmarks/nls/Bookmarks");

const CSS = {
  base: "demo-bookmarks",
  loading: "demo-bookmarks__loading",
  loadingIcon: "esri-icon-loading-indicator esri-rotating",
  fadeIn: "demo-bookmarks--fade-in",
  iconClass: "esri-icon-labels",
  bookmarkList: "demo-bookmarks__list",
  bookmarkItem: "demo-bookmarks__item",
  bookmarkItemIcon: "demo-bookmarks__item-icon",
  bookmarkItemName: "demo-bookmarks__item-name",
  bookmarkItemActive: "demo-bookmarks__item--active"
};

@subclass("demo.Bookmarks")
class Bookmarks extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any) {
    super();
  }

  postInitialize() {
    this.own(
      watchUtils.on(this, "viewModel.bookmarkItems", "change", () => this._bookmarkItemsChanged())
    );

    this._bookmarkItemsChanged();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  _handles: HandleRegistry = new HandleRegistry();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  iconClass
  //----------------------------------

  @property()
  iconClass = CSS.iconClass;

  //----------------------------------
  //  label
  //----------------------------------

  @property()
  label = i18n.label;

  //----------------------------------
  //  view
  //----------------------------------

  @aliasOf("viewModel.view")
  view: MapView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  @property({
    type: BookmarksViewModel
  })
  @renderable([
    "state"
  ])
  viewModel: BookmarksViewModel = new BookmarksViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const fadeInAnimation = cssTransition("enter", CSS.fadeIn);

    const loadingNode = (
      <div class={CSS.loading}>
        <span class={CSS.loadingIcon} />
      </div>
    );

    const bookmarkNodes = this._renderBookmarks();

    const { state } = this.viewModel;

    const bookmarkListNode = state === "ready" && bookmarkNodes.length ? [
      <ul
        enterAnimation={fadeInAnimation}
        aria-label={i18n.label}
        class={CSS.bookmarkList}
      >{bookmarkNodes}</ul>
    ] :
      state === "loading" ?
        loadingNode :
        null;

    return (
      <div class={CSS.base}>{bookmarkListNode}</div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderBookmarks(): any {
    const { bookmarkItems } = this.viewModel;

    return bookmarkItems.toArray().map(bookmarkItem => this._renderBookmark(bookmarkItem));
  }

  private _renderBookmark(bookmarkItem: BookmarkItem): any {
    const { active, name } = bookmarkItem;

    const bookmarkItemClasses = {
      [CSS.bookmarkItemActive]: active
    };

    return (
      <li bind={this}
        data-bookmark-item={bookmarkItem}
        class={this.classes(CSS.bookmarkItem, bookmarkItemClasses)}
        onclick={this._goToBookmark}
        onkeydown={this._goToBookmark}
        tabIndex={0}
        role="button"
        title={i18n.goToBookmark}
        aria-label={name}
      >
        <span class={this.classes(CSS.iconClass, CSS.bookmarkItemIcon)} /><span class={CSS.bookmarkItemName}>{name}</span>
      </li>
    );
  }

  private _bookmarkItemsChanged(): void {
    const itemsKey = "items";
    const { bookmarkItems } = this.viewModel;
    const { _handles } = this;

    _handles.remove(itemsKey);

    const handles = bookmarkItems.map(bookmarkItem => {
      return watchUtils.watch(bookmarkItem, [
        "active",
        "name"
      ], () => this.scheduleRender());
    });

    _handles.add(handles, itemsKey);

    this.scheduleRender();
  }

  @accessibleHandler()
  private _goToBookmark(event: Event): void {
    const node = event.currentTarget as Element;
    const bookmarkItem = node["data-bookmark-item"] as BookmarkItem;
    this.viewModel.goTo(bookmarkItem);
  }

}

export = Bookmarks;
