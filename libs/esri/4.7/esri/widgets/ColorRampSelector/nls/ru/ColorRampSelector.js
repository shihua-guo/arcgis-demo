// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define({colorRamps:{none:"\u041d\u0435\u0442",blackToWhite_predefined:"\u0427\u0435\u0440\u043d\u044b\u0439 \u2013 \u0431\u0435\u043b\u044b\u0439",yellowToRed_predefined:"\u0416\u0435\u043b\u0442\u044b\u0439 \u2013 \u043a\u0440\u0430\u0441\u043d\u044b\u0439",slope_predefined:"\u0423\u043a\u043b\u043e\u043d",aspect_predefined:"\u042d\u043a\u0441\u043f\u043e\u0437\u0438\u0446\u0438\u044f",errors_predefined:"\u041e\u0448\u0438\u0431\u043a\u0438",heatmap1_predefined:"\u041a\u0430\u0440\u0442\u0430 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0438 #1",
elevation1_predefined:"\u0420\u0435\u043b\u044c\u0435\u0444 #1",elevation2_predefined:"\u0420\u0435\u043b\u044c\u0435\u0444 #2",blueBright_predefined:"\u0421\u0438\u043d\u0438\u0439 \u044f\u0440\u043a\u0438\u0439",blueLightToDark_predefined:"\u041e\u0442 \u0433\u043e\u043b\u0443\u0431\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e-\u0441\u0438\u043d\u0435\u043c\u0443",blueGreenBright_predefined:"\u0421\u0438\u043d\u0435-\u0437\u0435\u043b\u0435\u043d\u044b\u0439 \u044f\u0440\u043a\u0438\u0439",
blueGreenLightToDark_predefined:"\u0421\u0438\u043d\u0435-\u0437\u0435\u043b\u0435\u043d\u044b\u0439 \u043e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e\u043c\u0443",brownLightToDark_predefined:"\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u043e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e\u043c\u0443",brownToBlueGreenDivergingBright_predefined:"\u041e\u0442 \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u043e\u0433\u043e \u043a \u0441\u0438\u043d\u0435-\u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u044f\u0440\u043a\u0438\u0439",
brownToBlueGreenDivergingDark_predefined:"\u041e\u0442 \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u043e\u0433\u043e \u043a \u0441\u0438\u043d\u0435-\u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u0442\u0435\u043c\u043d\u044b\u0439",coefficientBias_predefined:"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f",coldToHotDiverging_predefined:"\u0420\u0430\u0441\u0441\u0435\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0442 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0433\u043e \u043a \u0442\u0435\u043f\u043b\u043e\u043c\u0443",
conditionNumber_predefined:"\u041d\u043e\u043c\u0435\u0440 \u0443\u0441\u043b\u043e\u0432\u0438\u044f",cyanToPurple_predefined:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439 \u2013 \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439",cyanLightToBlueDark_predefined:"\u041e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e-\u043c\u0430\u043b\u0438\u043d\u043e\u0432\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e-\u0441\u0438\u043d\u0435\u043c\u0443",distance_predefined:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435",
grayLightToDark_predefined:"\u0421\u0435\u0440\u044b\u0439 \u043e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e\u043c\u0443",greenBright_predefined:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439 \u042f\u0440\u043a\u0438\u0439",greenLightToDark_predefined:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439 \u043e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e\u043c\u0443",greenToBlue_predefined:"\u041e\u0442 \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u043a \u0441\u0438\u043d\u0435\u043c\u0443",
orangeBright_predefined:"\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u044f\u0440\u043a\u0438\u0439",orangeLightToDark_predefined:"\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u043e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e\u043c\u0443",partialSpectrum_predefined:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u043f\u0435\u043a\u0442\u0440",partialSpectrum1Diverging_predefined:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 1 \u0440\u0430\u0441\u0441\u0435\u044f\u043d\u043d\u044b\u0439",
partialSpectrum2Diverging_predefined:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 2 \u0440\u0430\u0441\u0441\u0435\u044f\u043d\u043d\u044b\u0439",pinkToYellowGreenDivergingBright_predefined:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0440\u043e\u0437\u043e\u0432\u043e\u0433\u043e \u043a \u0436\u0435\u043b\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u044f\u0440\u043a\u0438\u0439",pinkToYellowGreenDivergingDark_predefined:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0440\u043e\u0437\u043e\u0432\u043e\u0433\u043e \u043a \u0436\u0435\u043b\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u0442\u0435\u043c\u043d\u044b\u0439",
precipitation_predefined:"\u041e\u0441\u0430\u0434\u043a\u0438",prediction_predefined:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437",purpleBright_predefined:"\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u044f\u0440\u043a\u0438\u0439",purpleToGreenDivergingBright_predefined:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u043a \u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u044f\u0440\u043a\u0438\u0439",
purpleToGreenDivergingDark_predefined:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u043a \u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u0442\u0435\u043c\u043d\u044b\u0439",purpleBlueBright_predefined:"\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u0441\u0438\u043d\u0438\u0439 \u044f\u0440\u043a\u0438\u0439",purpleBlueLightToDark_predefined:"\u041e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e-\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e-\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443",
purpleRedBright_predefined:"\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u044f\u0440\u043a\u0438\u0439",purpleRedLightToDark_predefined:"\u041a\u0440\u0430\u0441\u043d\u043e-\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u043e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e\u043c\u0443",redBright_predefined:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u044f\u0440\u043a\u0438\u0439",redLightToDark_predefined:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e\u043c\u0443",
redToBlueDivergingBright_predefined:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043a \u0441\u0438\u043d\u0435\u043c\u0443, \u044f\u0440\u043a\u0438\u0439",redToBlueDivergingDark_predefined:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043a \u0441\u0438\u043d\u0435\u043c\u0443, \u0442\u0435\u043c\u043d\u044b\u0439",redToGreen_predefined:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u2013 \u0437\u0435\u043b\u0435\u043d\u044b\u0439",
redToGreenDivergingBright_predefined:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043a \u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u044f\u0440\u043a\u0438\u0439",redToGreenDivergingDark_predefined:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043a \u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u0442\u0435\u043c\u043d\u044b\u0439",
spectrumFullBright_predefined:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",spectrumFullDark_predefined:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0435\u043a\u0442\u0440, \u0442\u0435\u043c\u043d\u044b\u0439",spectrumFullLight_predefined:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0435\u043a\u0442\u0440, \u0441\u0432\u0435\u0442\u043b\u044b\u0439",surface_predefined:"\u041f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c",
temperature_predefined:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",whiteToBlack_predefined:"\u0411\u0435\u043b\u044b\u0439 \u2013 \u0447\u0435\u0440\u043d\u044b\u0439",yellowToDarkRed_predefined:"\u041e\u0442 \u0436\u0435\u043b\u0442\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e-\u043a\u0440\u0430\u0441\u043d\u043e\u043c\u0443",yellowToGreenToDarkBlue_predefined:"\u041e\u0442 \u0436\u0435\u043b\u0442\u043e\u0433\u043e \u043a \u0437\u0435\u043b\u0435\u043d\u043e\u043c\u0443, \u0437\u0430\u0442\u0435\u043c \u043a \u0442\u0435\u043c\u043d\u043e-\u0441\u0438\u043d\u0435\u043c\u0443",
yellowGreenBright_predefined:"\u0416\u0435\u043b\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u044b\u0439 \u044f\u0440\u043a\u0438\u0439",yellowGreenLightToDark_predefined:"\u0416\u0435\u043b\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u044b\u0439 \u043e\u0442 \u0441\u0432\u0435\u0442\u043b\u043e\u0433\u043e \u043a \u0442\u0435\u043c\u043d\u043e\u043c\u0443"}});