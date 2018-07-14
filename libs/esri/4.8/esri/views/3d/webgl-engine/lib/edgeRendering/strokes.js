// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/assignHelper ../../../support/mathUtils ../Util ../../../../webgl/Texture".split(" "),function(B,b,C,z,v,A){function w(d,a){if(!d)return null;var c=d.length/2,b=p*c,c=Array(c),l=0;a=1===a;for(var f=0;f<d.length;f+=2){var g=(d[f]+d[f+1])/2;a?c[l++]=Math.min(b,1-(1-g)*h):c[l++]=Math.min(b,g*h)}return c}Object.defineProperty(b,"__esModule",{value:!0});b.generateStrokesTexture=function(d){for(var a=b.strokesDefinition.resolution,c=a/2,q=new Uint8Array(4*
a*a),l=4*a*c,c=b.strokesDefinition.amplitude,f=2*c,g=4*a,h=z.log2(a)+1,r=b.strokesDefinition.strokes.length,x=(h-1)*r*g,t=0,y=b.strokesDefinition.strokes;t<y.length;t++){for(var e=y[t],k=e.distance,e=e.pressure,m=x,u=0;u<h;u++){0!==u&&(k=w(k,0),e=w(e,1));for(var n=0;n<b.strokesDefinition.resolution;n++){var p=e?e[n%e.length]:1;v.packFloatRGBA((k?k[n%k.length]/f:0)+.5,q,m);v.packFloatRGBA(p,q,m+l);m+=4}m-=g*(r+1)}x+=g}d=new A(d,{pixelFormat:6408,dataType:5121,hasMipmap:!1,samplingMode:9729,width:a,
height:a,wrapMode:10497},q);return{resolution:a,texture:d,normalizationScale:f,amplitude:c,variants:r}};var p=.1,h=.5;b.strokesDefinition={amplitude:8,resolution:256,strokes:[{distance:[-1.59027,-1.59426,-1.59674,-1.59766,-1.59702,-1.59479,-1.59095,-1.5855,-1.57843,-1.56973,-1.55942,-1.5475,-1.53398,-1.5189,-1.50226,-1.4841,-1.46446,-1.44337,-1.42088,-1.39703,-1.37188,-1.34547,-1.31786,-1.28912,-1.2593,-1.22847,-1.19668,-1.16402,-1.13053,-1.09629,-1.06137,-1.02582,-.98972,-.95313,-.91611,-.87872,
-.84102,-.80306,-.76488,-.72654,-.68807,-.64952,-.61092,-.57232,-.53375,-.49527,-.45692,-.41874,-.38078,-.34309,-.3057,-.26867,-.23204,-.19585,-.16015,-.12497,-.09036,-.05634,-.02296,.00977,.04183,.07321,.10389,.13386,.16313,.19169,.21956,.24672,.27321,.299,.32413,.34858,.37237,.3955,.41798,.43981,.461,.48154,.50145,.52073,.53939,.55744,.57488,.5917,.6079,.62347,.63837,.65259,.66609,.67885,.69083,.70201,.71235,.72183,.73042,.73812,.7449,.75076,.7557,.75973,.76284,.76507,.76642,.76692,.76659,.76545,
.76352,.76083,.7574,.75324,.74837,.74279,.73652,.72959,.72199,.71377,.70493,.69553,.68558,.67515,.66426,.65298,.64135,.62944,.6173,.60499,.59257,.58008,.56759,.55513,.54275,.5305,.51842,.50654,.4949,.48353,.47246,.4617,.45128,.44121,.43149,.42213,.41313,.40448,.39617,.38818,.3805,.37309,.36594,.35902,.35229,.34572,.33927,.33292,.32663,.32035,.31407,.30774,.30135,.29486,.28824,.28148,.27454,.26739,.26002,.25241,.24454,.23639,.22796,.21922,.21016,.20076,.19098,.18082,.17023,.1592,.14768,.13566,.1231,
.10996,.09624,.08188,.06688,.05121,.03485,.01778,0,-.0185,-.03771,-.05763,-.07824,-.09952,-.12144,-.14396,-.16706,-.19069,-.21481,-.23938,-.26436,-.28971,-.31539,-.34136,-.36759,-.39404,-.42067,-.44746,-.47437,-.50136,-.52839,-.55544,-.58248,-.60948,-.63642,-.66329,-.6901,-.71684,-.74352,-.77015,-.79675,-.82332,-.84988,-.87644,-.90301,-.92958,-.95615,-.98272,-1.00926,-1.03575,-1.06217,-1.08847,-1.11463,-1.1406,-1.16633,-1.19178,-1.2169,-1.24164,-1.26595,-1.28979,-1.31312,-1.3359,-1.35809,-1.37963,
-1.4005,-1.42064,-1.44,-1.45853,-1.47616,-1.49285,-1.50853,-1.52313,-1.53659,-1.54886,-1.55986,-1.56955,-1.57788,-1.5848],pressure:[-.01365,-.00206,.01025,.02327,.03696,.05129,.06619,.08163,.09755,.11393,.1307,.14784,.16531,.18308,.20111,.21938,.23786,.25651,.2753,.29419,.31315,.33215,.35115,.37015,.38913,.40806,.42694,.44576,.46449,.48313,.50167,.5201,.53839,.55653,.57448,.59222,.60971,.62692,.6438,.66033,.67648,.69221,.70753,.72242,.73688,.75093,.76456,.77779,.79063,.80309,.81517,.82686,.83817,
.84911,.85967,.86987,.87972,.88924,.89845,.90734,.91594,.92425,.93229,.94005,.94754,.95475,.96166,.96826,.97451,.9804,.98588,.99092,.99549,.99957,.99685,.99381,.99131,.98936,.98796,.98711,.98681,.98706,.98787,.98923,.99113,.99357,.99654,1,.99607,.99171,.98695,.98181,.97634,.97057,.96452,.95824,.95175,.94506,.93818,.93113,.92389,.91647,.90887,.90109,.89314,.88501,.87672,.86831,.85978,.85119,.84256,.83393,.82533,.8168,.80836,.80002,.79181,.78374,.77582,.7681,.76059,.75331,.74629,.73955,.73311,.72697,
.72116,.71568,.71054,.70572,.70121,.697,.69304,.68931,.68576,.68236,.67905,.67582,.67262,.66941,.66619,.66291,.65957,.65613,.65259,.64892,.6451,.6411,.6369,.63248,.62783,.62295,.61783,.61247,.60688,.60104,.59498,.58868,.58216,.57542,.56845,.56125,.5538,.5461,.53813,.52986,.52129,.51239,.50316,.49359,.4837,.47349,.46299,.45223,.44124,.43005,.41869,.40719,.39557,.38386,.37207,.36023,.34836,.33648,.32464,.31287,.30119,.28963,.27822,.26698,.25594,.2451,.23448,.22409,.21391,.20394,.19415,.18452,.17503,
.16565,.15636,.14713,.13794,.1288,.11968,.11058,.10151,.09247,.08346,.07447,.06552,.05659,.0477,.03885,.03007,.02137,.01278,.00433,-.00393,-.012,-.01983,-.02738,-.03463,-.04155,-.0481,-.05429,-.0601,-.06553,-.07057,-.07524,-.07954,-.08347,-.08703,-.09022,-.09303,-.09544,-.09744,-.09898,-.10004,-.10059,-.1006,-.10005,-.09892,-.0972,-.09487,-.09192,-.08833,-.08409,-.07918,-.07357,-.06724,-.06019,-.0524,-.04386,-.03455,-.02448]},{distance:[-3.46259,-3.47131,-3.47668,-3.47863,-3.47712,-3.4721,-3.46352,
-3.45138,-3.43566,-3.41635,-3.39347,-3.36704,-3.33709,-3.30368,-3.26684,-3.22667,-3.18322,-3.1366,-3.08689,-3.0342,-2.97865,-2.92036,-2.85946,-2.79607,-2.73034,-2.66241,-2.59242,-2.52052,-2.44686,-2.37159,-2.29485,-2.2168,-2.13757,-2.05731,-1.97616,-1.89426,-1.81174,-1.72875,-1.64543,-1.56191,-1.47833,-1.39483,-1.3115,-1.22847,-1.14581,-1.06361,-.98193,-.90083,-.82036,-.74054,-.66141,-.583,-.50532,-.4284,-.35228,-.277,-.20261,-.12916,-.05672,.01463,.08485,.15384,.22153,.28784,.35269,.41602,.47776,
.53787,.59629,.653,.70799,.76123,.81274,.86253,.9106,.95698,1.0017,1.04477,1.0862,1.126,1.16415,1.20065,1.23546,1.26857,1.29994,1.32953,1.35731,1.38321,1.40719,1.42921,1.44922,1.46719,1.48309,1.49691,1.50862,1.51825,1.52581,1.53133,1.53486,1.53644,1.53616,1.53409,1.53031,1.52493,1.51803,1.50972,1.50009,1.48924,1.47725,1.46421,1.45019,1.43527,1.4195,1.40295,1.38568,1.36778,1.34929,1.3303,1.31087,1.29108,1.27099,1.25066,1.23018,1.2096,1.18898,1.16838,1.14785,1.12745,1.10721,1.08719,1.06741,1.04791,
1.02871,1.00986,.99136,.97324,.95551,.93819,.92127,.90476,.88866,.87296,.85767,.84277,.82823,.81406,.80022,.7867,.77346,.76049,.74774,.73519,.72278,.71049,.69827,.68606,.67381,.66145,.64893,.63618,.62313,.60973,.5959,.5816,.56675,.5513,.53516,.51826,.50053,.4819,.46231,.44169,.42002,.39725,.37336,.34834,.32219,.2949,.2665,.23698,.20638,.17469,.14193,.10809,.07316,.03714,0,-.03827,-.07772,-.11836,-.16022,-.20332,-.24768,-.29332,-.34024,-.38844,-.43788,-.48854,-.54036,-.59329,-.64724,-.70211,-.75782,
-.81425,-.87128,-.92881,-.98674,-1.04498,-1.10346,-1.1621,-1.22086,-1.27969,-1.33854,-1.3974,-1.45625,-1.51511,-1.57396,-1.63283,-1.69173,-1.75067,-1.80968,-1.86875,-1.9279,-1.98712,-2.04639,-2.10568,-2.16495,-2.22416,-2.28322,-2.34208,-2.40063,-2.4588,-2.51647,-2.57354,-2.62989,-2.68543,-2.74002,-2.79357,-2.84597,-2.89711,-2.94689,-2.99521,-3.04195,-3.087,-3.13023,-3.17152,-3.21075,-3.24779,-3.28252,-3.3148,-3.34451,-3.37154,-3.39577,-3.41709,-3.43539,-3.45059],pressure:[.87183,.87151,.87129,.87118,
.87117,.87128,.87149,.87182,.87225,.8728,.87347,.87424,.87513,.87613,.87723,.87845,.87978,.88122,.88276,.88441,.88616,.88801,.88996,.892,.89414,.89637,.89868,.90108,.90356,.90611,.90874,.91144,.91421,.91704,.91993,.92287,.92587,.92892,.93201,.93514,.93831,.94151,.94474,.94799,.95126,.95456,.95786,.96118,.9645,.96783,.97116,.97448,.9778,.98111,.98441,.9877,.99096,.99421,.99742,.99938,.99622,.9931,.99001,.98697,.98397,.98101,.97811,.97526,.97246,.96972,.96703,.96441,.96185,.95935,.95691,.95455,.95225,
.95002,.94786,.94577,.94376,.94182,.93995,.93817,.93646,.93483,.93328,.93181,.93042,.92911,.92788,.92673,.92566,.92467,.92376,.92293,.92217,.92149,.92088,.92034,.91987,.91947,.91913,.91886,.91864,.91849,.91838,.91833,.91834,.91839,.91849,.91863,.91883,.91907,.91935,.91968,.92005,.92046,.92092,.92142,.92195,.92253,.92314,.9238,.92449,.92521,.92598,.92677,.9276,.92847,.92936,.93029,.93125,.93224,.93325,.9343,.93537,.93646,.93758,.93872,.93988,.94106,.94225,.94346,.94469,.94593,.94718,.94844,.94971,
.95098,.95226,.95354,.95482,.9561,.95738,.95867,.95995,.96122,.9625,.96377,.96504,.9663,.96757,.96883,.97009,.97135,.97261,.97387,.97513,.9764,.97767,.97895,.98023,.98153,.98284,.98416,.98549,.98684,.98821,.9896,.99101,.99244,.99389,.99537,.99688,.99842,1,.99839,.99675,.99508,.99336,.99161,.98982,.98799,.98613,.98422,.98228,.98029,.97827,.97622,.97414,.97202,.96987,.9677,.96551,.9633,.96107,.95882,.95656,.9543,.95202,.94975,.94747,.94519,.94292,.94065,.93838,.93613,.93388,.93164,.92941,.9272,.92499,
.9228,.92062,.91846,.91631,.91418,.91207,.90998,.90792,.90588,.90387,.90189,.89995,.89804,.89617,.89434,.89256,.89083,.88914,.88752,.88595,.88443,.88299,.88161,.8803,.87907,.87791,.87683,.87584,.87494,.87412,.8734,.87278,.87225]},{distance:[.39335,.43437,.47737,.52234,.56923,.61801,.66864,.72109,.7753,.83123,.88882,.94801,1.00875,1.07097,1.13461,1.1996,1.26586,1.33333,1.40193,1.47158,1.54221,1.61373,1.68607,1.75913,1.83284,1.90711,1.98186,2.05699,2.13243,2.20809,2.28387,2.35971,2.4355,2.51117,2.58663,
2.66179,2.73658,2.81092,2.88473,2.95792,3.03043,3.10217,3.17308,3.24309,3.31211,3.3801,3.44697,3.51267,3.57712,3.64028,3.70208,3.76247,3.8214,3.87881,3.93467,3.98892,4.04152,4.09244,4.14164,4.18908,4.23474,4.27859,4.32061,4.36077,4.39905,4.43544,4.46992,4.50249,4.53314,4.56185,4.58864,4.61349,4.63642,4.65745,4.67657,4.69381,4.7092,4.72274,4.73447,4.74441,4.75259,4.75903,4.76376,4.76682,4.76822,4.768,4.76618,4.76279,4.75786,4.75142,4.74348,4.73409,4.72326,4.71102,4.69739,4.68241,4.6661,4.64849,4.6296,
4.60948,4.58816,4.56567,4.54204,4.51732,4.49154,4.46473,4.43694,4.4082,4.37854,4.348,4.31662,4.28443,4.25145,4.21773,4.1833,4.14819,4.11243,4.07606,4.03912,4.00162,3.96361,3.92512,3.88618,3.84683,3.80708,3.76697,3.72653,3.68579,3.64478,3.60351,3.56202,3.52033,3.47845,3.43642,3.39425,3.35196,3.30957,3.2671,3.22455,3.18196,3.13933,3.09668,3.05402,3.01136,2.96873,2.92613,2.88357,2.84108,2.79865,2.75631,2.71407,2.67195,2.62994,2.58807,2.54634,2.50477,2.46338,2.42216,2.38114,2.34032,2.29971,2.25933,2.21916,
2.17923,2.13954,2.10008,2.06087,2.02189,1.98316,1.94468,1.90644,1.86845,1.83069,1.79316,1.75586,1.71877,1.68189,1.6452,1.60868,1.57232,1.53611,1.50004,1.46407,1.4282,1.39241,1.35668,1.321,1.28535,1.24972,1.2141,1.17849,1.14286,1.10723,1.07158,1.03593,1.00028,.96464,.92902,.89344,.85793,.8225,.78719,.75203,.71705,.68231,.64784,.61369,.57991,.54656,.51368,.48134,.44959,.41849,.3881,.35848,.32967,.30174,.27474,.24872,.22373,.19982,.17702,.15539,.13497,.11579,.09791,.08137,.06621,.05248,.04022,.02948,
.02029,.01271,.00677,.00252,0,-7.6E-4,2.7E-4,.00314,.00788,.01451,.02307,.03357,.04604,.0605,.07697,.09546,.11599,.13858,.16322,.18992,.21869,.24952,.28241,.31735,.35434],pressure:[.95248,.95236,.95228,.95223,.95222,.95224,.95231,.95241,.95256,.95274,.95296,.95322,.95352,.95385,.95423,.95465,.9551,.9556,.95613,.9567,.95731,.95796,.95864,.95936,.96012,.96091,.96173,.96259,.96348,.9644,.96535,.96633,.96734,.96838,.96944,.97053,.97164,.97277,.97393,.9751,.97629,.9775,.97873,.97997,.98122,.98249,.98376,
.98505,.98634,.98763,.98893,.99023,.99154,.99284,.99414,.99544,.99673,.99802,.9993,.99942,.99816,.99691,.99568,.99445,.99324,.99205,.99087,.98972,.98858,.98746,.98636,.98528,.98423,.9832,.98219,.98121,.98025,.97931,.9784,.97752,.97666,.97582,.97501,.97423,.97347,.97274,.97203,.97135,.9707,.97007,.96948,.9689,.96836,.96784,.96735,.96689,.96646,.96605,.96567,.96533,.965,.96471,.96445,.96421,.964,.96382,.96367,.96355,.96346,.96339,.96335,.96334,.96336,.9634,.96348,.96358,.9637,.96385,.96403,.96423,.96446,
.96471,.96499,.96529,.96561,.96595,.96631,.96669,.96709,.96751,.96795,.9684,.96887,.96935,.96984,.97035,.97087,.9714,.97194,.97249,.97304,.97361,.97418,.97476,.97534,.97592,.97651,.97711,.9777,.9783,.9789,.9795,.9801,.9807,.9813,.9819,.9825,.98309,.98369,.98428,.98486,.98545,.98603,.98661,.98718,.98775,.98832,.98888,.98944,.99,.99056,.99112,.99167,.99223,.99279,.99335,.99392,.99449,.99507,.99565,.99624,.99684,.99745,.99807,.9987,.99934,1,.99933,.99866,.99797,.99727,.99656,.99583,.9951,.99435,.99359,
.99283,.99205,.99126,.99046,.98966,.98885,.98803,.9872,.98637,.98554,.9847,.98387,.98303,.98219,.98134,.9805,.97967,.97883,.978,.97717,.97634,.97552,.97471,.97389,.97309,.97229,.9715,.97071,.96993,.96915,.96838,.96762,.96687,.96612,.96539,.96466,.96395,.96324,.96255,.96187,.9612,.96055,.95991,.95929,.95869,.95811,.95754,.957,.95648,.95599,.95552,.95508,.95467,.95428,.95393,.9536,.95331,.95305,.95283,.95264]},{distance:[2.85606,2.86149,2.86432,2.8645,2.862,2.85686,2.84912,2.83886,2.82618,2.81117,2.79393,
2.77456,2.75314,2.72975,2.70447,2.67734,2.64844,2.61784,2.58564,2.55196,2.5169,2.48057,2.44305,2.40438,2.36462,2.32383,2.28208,2.23943,2.19591,2.15153,2.10628,2.06016,2.01321,1.96548,1.91702,1.86793,1.8183,1.76829,1.71803,1.66767,1.61737,1.56726,1.51746,1.46803,1.41902,1.37044,1.32228,1.27452,1.22716,1.18023,1.13376,1.08781,1.04244,.99769,.95357,.91003,.86701,.82447,.78238,.74069,.69938,.65836,.61758,.57699,.53656,.49627,.45611,.41611,.37632,.33683,.29776,.25924,.22141,.18441,.14839,.11346,.07972,
.04727,.01619,-.01348,-.0417,-.0684,-.09351,-.11698,-.13875,-.1588,-.17713,-.19381,-.20889,-.22242,-.23444,-.24501,-.25421,-.26216,-.26897,-.27473,-.27951,-.28336,-.28631,-.28836,-.28948,-.28963,-.28873,-.28673,-.28355,-.27916,-.27354,-.26673,-.25878,-.2498,-.23992,-.22929,-.21802,-.20623,-.19398,-.18134,-.16836,-.1551,-.14163,-.12809,-.11461,-.1013,-.08826,-.07557,-.06335,-.0517,-.04077,-.03065,-.02143,-.01321,-.00606,0,.00496,.00888,.01181,.01385,.01511,.0157,.01574,.01533,.01458,.01358,.0124,.01112,
.00979,.00851,.00738,.0065,.006,.00596,.00646,.00754,.00924,.01161,.01471,.01858,.02323,.02865,.03481,.04169,.0493,.05765,.06677,.07671,.08754,.09934,.11222,.12628,.14159,.15823,.17624,.19561,.21632,.23828,.26142,.28563,.31083,.33696,.36397,.39185,.42057,.4501,.48036,.51125,.54264,.5744,.60646,.63871,.67105,.70337,.73556,.76751,.79918,.83048,.86139,.8919,.92202,.95184,.98144,1.01094,1.04045,1.0701,1.10002,1.13029,1.16103,1.1923,1.22416,1.25664,1.28979,1.32364,1.35824,1.39363,1.42985,1.4669,1.50475,
1.54332,1.58252,1.62227,1.6625,1.70312,1.744,1.78501,1.82598,1.8668,1.90734,1.94754,1.98732,2.02666,2.06555,2.10402,2.1421,2.17985,2.2173,2.25448,2.29139,2.328,2.36424,2.4,2.43515,2.46955,2.50309,2.53565,2.56717,2.59761,2.62692,2.65505,2.68191,2.7074,2.73138,2.75375,2.7744,2.79324,2.81017,2.82504,2.83772,2.8481],pressure:[.22758,.23641,.24578,.25568,.26609,.27699,.28835,.30016,.31237,.32495,.33789,.35113,.36466,.37843,.39241,.40658,.4209,.43535,.44989,.4645,.47916,.49385,.50853,.5232,.53784,.55243,
.56696,.58141,.59578,.61004,.62419,.63821,.65209,.6658,.67934,.69268,.70582,.71873,.73139,.7438,.75594,.76779,.77935,.79061,.80156,.81221,.82254,.83258,.84231,.85176,.86091,.86978,.87837,.88669,.89473,.9025,.91,.91725,.92425,.931,.93752,.9438,.94985,.95566,.96124,.96658,.97168,.97652,.98109,.98539,.98939,.99309,.99646,.99949,.99783,.99552,.99361,.99209,.99098,.99029,.99003,.99019,.99079,.99181,.99324,.9951,.99735,1,.99698,.99361,.98992,.98592,.98163,.97709,.97231,.96731,.96212,.95676,.95122,.94554,
.93973,.93378,.92773,.92157,.91532,.90899,.90258,.89612,.88961,.88308,.87653,.87,.8635,.85705,.85068,.8444,.83823,.83219,.82628,.82052,.81493,.80952,.8043,.79929,.7945,.78994,.78561,.78151,.77765,.77402,.77062,.76742,.76443,.76161,.75896,.75645,.75406,.75175,.74951,.7473,.74511,.74289,.74064,.73833,.73592,.73341,.73078,.728,.72507,.72197,.71869,.71522,.71156,.70769,.70363,.69936,.69489,.69021,.68533,.68023,.67492,.66939,.66363,.65765,.65145,.64501,.63833,.63143,.62428,.61691,.60931,.60148,.59344,
.58521,.57679,.5682,.55948,.55063,.54167,.53264,.52354,.51439,.50522,.49603,.48686,.47773,.46865,.45964,.45072,.44192,.43324,.42469,.41629,.40804,.39994,.392,.3842,.37655,.36903,.36164,.35437,.3472,.34012,.33312,.3262,.31933,.31251,.30574,.299,.2923,.28563,.27899,.27239,.26583,.25933,.25288,.24652,.24025,.2341,.22808,.22221,.21653,.21104,.20576,.20072,.19592,.19138,.18712,.18313,.17943,.17602,.17292,.17013,.16766,.16551,.16369,.16222,.1611,.16036,.16001,.16007,.16055,.16148,.16286,.16471,.16705,.16988,
.17321,.17706,.18144,.18636,.19182,.19785,.20443,.21158,.2193]},{distance:[-2.31317,-2.3191,-2.32189,-2.32154,-2.31811,-2.31174,-2.30254,-2.29062,-2.27609,-2.25904,-2.23954,-2.21767,-2.19355,-2.16732,-2.13907,-2.10885,-2.07672,-2.04268,-2.00677,-1.96911,-1.92985,-1.88914,-1.84713,-1.80397,-1.75979,-1.71467,-1.66864,-1.62171,-1.57395,-1.52546,-1.47625,-1.42628,-1.3755,-1.32384,-1.27131,-1.218,-1.16408,-1.10972,-1.05508,-1.00031,-.94551,-.89077,-.83615,-.7817,-.72757,-.6739,-.62076,-.56821,-.51625,
-.46484,-.41397,-.36366,-.314,-.26506,-.21689,-.16957,-.12316,-.07766,-.03301,.01085,.05399,.09643,.13827,.17967,.22079,.26176,.30265,.34342,.38397,.42414,.46381,.50285,.54115,.57863,.61524,.65093,.6856,.71914,.75153,.78275,.81283,.84182,.86972,.89651,.92208,.94634,.96919,.99052,1.01025,1.02835,1.04484,1.05976,1.07309,1.08479,1.09492,1.1036,1.11096,1.11714,1.12224,1.12627,1.12916,1.13083,1.13125,1.13036,1.12816,1.12466,1.11992,1.11397,1.10677,1.09827,1.08849,1.07746,1.06527,1.05203,1.03786,1.02283,
1.00695,.99025,.97279,.9546,.93573,.9163,.8965,.8765,.85647,.83652,.81687,.79775,.77939,.76199,.74568,.73049,.71635,.70316,.69082,.67925,.66834,.65804,.64831,.63911,.63032,.62184,.61363,.60564,.59788,.59036,.58308,.57597,.5689,.56177,.55447,.5469,.53896,.53062,.5219,.51283,.5034,.49355,.48335,.47287,.46223,.45154,.44085,.43012,.41923,.40805,.39648,.38441,.37176,.35849,.34458,.32999,.31461,.29833,.28109,.26288,.2437,.22361,.20265,.18082,.15807,.13434,.1096,.0838,.0569,.02894,0,-.0298,-.0604,-.09173,
-.12364,-.15594,-.18843,-.22092,-.25331,-.28559,-.31781,-.35006,-.38244,-.41502,-.44785,-.48098,-.5144,-.54811,-.58218,-.61666,-.65153,-.68677,-.72232,-.75807,-.79397,-.83002,-.86628,-.90281,-.93968,-.97693,-1.01465,-1.05282,-1.09139,-1.13031,-1.16956,-1.20917,-1.24905,-1.28907,-1.32908,-1.36891,-1.40844,-1.44765,-1.48658,-1.52527,-1.56376,-1.60206,-1.64016,-1.67801,-1.71552,-1.75264,-1.78936,-1.8257,-1.86161,-1.89702,-1.93182,-1.96584,-1.99894,-2.03102,-2.06203,-2.0919,-2.12056,-2.14794,-2.17397,
-2.19852,-2.22138,-2.24235,-2.26129,-2.27805,-2.29243,-2.30422],pressure:[.9681,.97424,.98046,.98674,.99309,.9995,.99404,.98754,.981,.97444,.96785,.96124,.95462,.94801,.94139,.93479,.92822,.92167,.91515,.90868,.90225,.89589,.88959,.88336,.87722,.87115,.86519,.85932,.85356,.84792,.84239,.83699,.83173,.8266,.82162,.81679,.81211,.80759,.80324,.79906,.79505,.79121,.78756,.78409,.78081,.77771,.77481,.77211,.76959,.76728,.76516,.76324,.76153,.76001,.75869,.75757,.75665,.75593,.7554,.75507,.75493,.75498,
.75523,.75565,.75627,.75706,.75803,.75917,.76049,.76197,.76361,.76541,.76737,.76947,.77172,.77409,.7766,.77923,.78198,.78484,.7878,.79086,.79401,.79724,.80055,.80394,.8074,.81092,.8145,.81813,.82182,.82556,.82934,.83317,.83703,.84093,.84487,.84884,.85284,.85687,.86094,.86503,.86915,.87329,.87746,.88166,.88587,.89011,.89436,.89863,.90291,.9072,.91149,.91579,.92009,.92438,.92867,.93295,.9372,.94144,.94566,.94985,.954,.95812,.96219,.96623,.97021,.97415,.97802,.98184,.9856,.9893,.99293,.9965,1,.99657,
.9932,.98991,.98668,.98352,.98042,.97738,.9744,.97148,.9686,.96577,.96298,.96023,.95751,.95482,.95214,.94949,.94684,.9442,.94156,.93892,.93627,.93361,.93094,.92825,.92555,.92284,.9201,.91735,.91458,.91179,.90899,.90616,.90332,.90047,.8976,.89472,.89183,.88893,.88603,.88314,.88024,.87735,.87448,.87162,.86878,.86597,.86319,.86044,.85774,.85508,.85247,.84993,.84744,.84503,.84269,.84042,.83825,.83616,.83417,.83227,.83048,.8288,.82724,.82578,.82445,.82324,.82215,.82119,.82037,.81967,.81911,.81868,.81839,
.81824,.81823,.81835,.81862,.81903,.81957,.82026,.82109,.82206,.82317,.82443,.82583,.82737,.82906,.83089,.83287,.83499,.83726,.83968,.84223,.84494,.84778,.85077,.8539,.85717,.86058,.86412,.86781,.87163,.87559,.87968,.88391,.88826,.89275,.89737,.90211,.90698,.91198,.91709,.92233,.92768,.93315,.93873,.94441,.95019,.95607,.96205]},{distance:[4.72925,4.81721,4.9037,4.98859,5.07177,5.15311,5.23249,5.3098,5.38491,5.45772,5.52811,5.59598,5.66122,5.72375,5.78346,5.84028,5.8941,5.94486,5.99248,6.03689,6.07803,
6.11584,6.15028,6.18128,6.20882,6.23285,6.25336,6.27031,6.28369,6.29348,6.29969,6.3023,6.30133,6.29678,6.28867,6.27703,6.26187,6.24324,6.22116,6.19567,6.16683,6.13468,6.09928,6.06068,6.01896,5.97417,5.92639,5.87569,5.82217,5.76589,5.70696,5.64545,5.58147,5.5151,5.44644,5.37559,5.30265,5.2277,5.15085,5.0722,4.99184,4.90987,4.82639,4.74151,4.65533,4.56794,4.47945,4.38996,4.29959,4.20843,4.11658,4.02416,3.93125,3.83796,3.74437,3.65057,3.55666,3.46272,3.36884,3.27509,3.18155,3.08831,2.99545,2.90303,2.81114,
2.71984,2.62922,2.53933,2.45026,2.36207,2.27484,2.18862,2.10349,2.01951,1.93675,1.85528,1.77515,1.69644,1.61919,1.54348,1.46935,1.39685,1.32605,1.25698,1.18967,1.12417,1.06049,.99863,.93862,.88044,.82408,.76953,.71676,.66574,.61644,.56882,.52282,.47841,.43553,.39413,.35414,.31551,.27817,.24206,.20712,.17328,.14048,.10866,.07776,.04772,.01848,-.00999,-.03776,-.06487,-.09134,-.11721,-.14251,-.16725,-.19144,-.21509,-.2382,-.26076,-.28275,-.30416,-.32496,-.34511,-.36459,-.38334,-.40134,-.41852,-.43485,
-.45026,-.46471,-.47815,-.49052,-.50179,-.51189,-.52081,-.52849,-.5349,-.54003,-.54383,-.54627,-.54734,-.54702,-.54528,-.54211,-.53752,-.53149,-.52403,-.51515,-.50487,-.4932,-.48015,-.46575,-.45001,-.43297,-.41463,-.39503,-.37419,-.35213,-.32887,-.30443,-.27885,-.25214,-.22432,-.19541,-.16544,-.13442,-.10235,-.06926,-.03514,0,.03616,.07336,.11159,.15088,.19125,.23272,.27531,.31906,.36401,.41019,.45764,.5064,.55651,.60802,.66096,.71538,.77129,.82874,.88776,.94836,1.01056,1.07438,1.13982,1.20687,1.27554,
1.34581,1.41766,1.49107,1.56599,1.64239,1.72025,1.79951,1.88013,1.96209,2.04532,2.12979,2.21546,2.30226,2.39017,2.47911,2.56905,2.65991,2.75164,2.84416,2.93742,3.03133,3.12582,3.2208,3.31619,3.41191,3.50785,3.60393,3.70006,3.79612,3.89202,3.98765,4.08291,4.17767,4.27182,4.36525,4.45783,4.54944,4.63995],pressure:[.30942,.30838,.30765,.30724,.30715,.30738,.30795,.30884,.31007,.31164,.31354,.31578,.31837,.32129,.32455,.32815,.33209,.33636,.34097,.34591,.35117,.35675,.36265,.36887,.37539,.38221,.38933,
.39674,.40442,.41238,.4206,.42907,.43779,.44675,.45593,.46533,.47493,.48473,.49471,.50486,.51517,.52563,.53623,.54694,.55777,.5687,.57971,.59079,.60194,.61313,.62435,.6356,.64686,.65811,.66935,.68056,.69174,.70286,.71391,.72489,.73579,.74659,.75728,.76785,.7783,.7886,.79876,.80877,.81861,.82827,.83776,.84706,.85617,.86507,.87378,.88227,.89056,.89863,.90649,.91412,.92153,.92872,.93568,.94241,.94892,.95519,.96122,.96702,.97258,.97791,.98299,.98783,.99242,.99677,.99911,.99525,.99164,.98827,.98515,.98228,
.97966,.97728,.97514,.97324,.97159,.97017,.96898,.96801,.96727,.96674,.96641,.96629,.96635,.96661,.96703,.96762,.96838,.96928,.97032,.97149,.97279,.9742,.97572,.97734,.97905,.98085,.98273,.98468,.98669,.98877,.99091,.99311,.99535,.99765,1,.9976,.99516,.99267,.99014,.98755,.98491,.98222,.97947,.97666,.97378,.97083,.96781,.96471,.96153,.95826,.9549,.95144,.94787,.9442,.94042,.93651,.93249,.92834,.92407,.91966,.91512,.91045,.90564,.90069,.8956,.89037,.885,.87949,.87384,.86806,.86214,.85608,.84988,.84356,
.83711,.83053,.82383,.81702,.81009,.80306,.79594,.78872,.78141,.77403,.76657,.75905,.75148,.74385,.73619,.72849,.72076,.71302,.70526,.69749,.68972,.68195,.67419,.66644,.65871,.65099,.64329,.63561,.62795,.62032,.61271,.60512,.59755,.59001,.58248,.57497,.56749,.56002,.55256,.54512,.5377,.5303,.52291,.51554,.50819,.50087,.49358,.48632,.4791,.47192,.4648,.45773,.45072,.44378,.43692,.43015,.42346,.41687,.41039,.40403,.39779,.39168,.38571,.37989,.37423,.36873,.36342,.35828,.35335,.34862,.34409,.3398,.33573,
.3319,.32831,.32498,.32192,.31912,.3166,.31436,.31242,.31077]}]}});