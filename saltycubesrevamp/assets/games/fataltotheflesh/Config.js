var Config = {};

//base:
Config.debug = false;
Config.framerate = 24;
Config.backgroundColor = '#fff';

//piece:
Config.originalSize = [800, 600];
Config.scaleByRatio = [.45,2.44, .93,1.3, 1.33,1, 2,1];

Config.color = "#ff0000";
Config.armpitWidth = .05;
Config.armpitLength = 15;
Config.cutThicknessMax = 10;
Config.lineWidth = 1.5;
Config.dripRatio = 150;//lower is more
Config.dripMargin = .2;//determines margin at ends of cut where no drips will occur
Config.dripPauseChance = .04;//pauses in drips rolling down
Config.dripPauseDuration = [4,12];//in frames
Config.dripDelay = 50;//msecs
Config.cutDelay = 125;//in msecs


Config.drips = ["drip1","drip2","drip3","drip4","drip5"];