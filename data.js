var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.5938533016998946,
        "pitch": -0.26181559713542235,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.5905995729285998,
          "pitch": 0.037402858541552675,
          "rotation": 0,
          "target": "1-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-g-floor",
      "name": "G Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.09181549939219025,
        "pitch": 0.08214986292152915,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.5488918550975228,
          "pitch": 0.4535382515958215,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.7256154918002373,
          "pitch": 0.5465355166016383,
          "rotation": 5.497787143782138,
          "target": "2-living-room"
        },
        {
          "yaw": 1.1511169383751767,
          "pitch": 0.5035268909717416,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.13986638098706727,
          "pitch": 0.15467576295355911,
          "rotation": 0,
          "target": "5-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5768491015263368,
        "pitch": 0.7903888438559061,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.9514529700908687,
          "pitch": 0.6218870086925001,
          "rotation": 0.7853981633974483,
          "target": "1-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.3097641081104001,
        "pitch": -0.11034500219203025,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.1695555686047001,
          "pitch": 0.27780658347194986,
          "rotation": 0.7853981633974483,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.435986662398477,
        "pitch": 0.38125056141607416,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.7147412798266117,
          "pitch": 0.373423380062583,
          "rotation": 5.497787143782138,
          "target": "3-backyard"
        },
        {
          "yaw": 1.0798631003260155,
          "pitch": 0.4716928223987278,
          "rotation": 0,
          "target": "1-g-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.125631824856937,
          "pitch": 0.24139631790304605,
          "title": "Cellar",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.5848159721464015,
        "pitch": 0.5248968068100943,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.5883461682362974,
          "pitch": 0.5339072178914872,
          "rotation": 5.497787143782138,
          "target": "9-bedroom-2"
        },
        {
          "yaw": -1.1191002525336806,
          "pitch": 0.40538016501470153,
          "rotation": 0.7853981633974483,
          "target": "10-ii-floor"
        },
        {
          "yaw": 0.10852549163036684,
          "pitch": 0.6687600623561583,
          "rotation": 0,
          "target": "6-bathroom"
        },
        {
          "yaw": -1.1919697069307134,
          "pitch": 1.0526419366053084,
          "rotation": 7.0685834705770345,
          "target": "1-g-floor"
        },
        {
          "yaw": 1.4595601229053612,
          "pitch": 0.8643837648009125,
          "rotation": 0.7853981633974483,
          "target": "8-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.3333567224842913,
        "pitch": 0.6431172452486997,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.4221209182035555,
          "pitch": 0.845559278711546,
          "rotation": 0,
          "target": "7-bathroom"
        },
        {
          "yaw": -0.04400264444192459,
          "pitch": 0.542484287965415,
          "rotation": 0,
          "target": "5-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6017377098155023,
          "pitch": 0.9398223837688118,
          "rotation": 0.7853981633974483,
          "target": "6-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.050234102932206426,
        "pitch": 0.520267268001902,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.3848156510654235,
          "pitch": 0.5860519680487339,
          "rotation": 0,
          "target": "5-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7343492252920623,
        "pitch": 0.5970055446814602,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.6167018692495461,
          "pitch": 0.5346589344561838,
          "rotation": 5.497787143782138,
          "target": "5-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7442571638074913,
        "pitch": 0.7438561308902845,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.527003842723362,
          "pitch": 1.1355326946130582,
          "rotation": 1.5707963267948966,
          "target": "11-bedroom-3"
        },
        {
          "yaw": 0.9412782582701436,
          "pitch": 1.1008193827198038,
          "rotation": 4.71238898038469,
          "target": "12-bedroom-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.2680267242233878,
        "pitch": 0.22410323515607367,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.4624417274838013,
          "pitch": 0.5486738783358085,
          "rotation": 1.5707963267948966,
          "target": "10-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.5475789115844343,
        "pitch": 0.37290471662048397,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.3717176936147624,
          "pitch": 0.5130173815399637,
          "rotation": 5.497787143782138,
          "target": "10-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "16 Welton Grove",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
