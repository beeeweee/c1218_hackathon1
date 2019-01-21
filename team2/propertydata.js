var propData = [

    ["Craster's Keep",60,50,2,10,30,90,160,250,30,"#7c533b",1,'player1'],
    ["The First of The First Men",60,50,4,20,60,180,320,450,30,"57137f", 3],
    ["The NightFort",100,50,6,30,90,270,400,550,50,"9addf3",6],
    ["Moles's Town",100,50,6,30,90,270,400,550,50, "9addf3",8],
    ["The Inn at The CrossRoads",120,50,8,40,100,300,450,600,60, "9addf3",9],
    ["Vaes Dothrak",140,100,10,50,150,450,625,750,70,"#e83a7a",11],
    ["Qarth",140,100,10,50,150,450,625,750,70, "#e83a7a",13],
    ["Pentos",160,100,12,60,180,500,700,900,80, "#e83a7a",14],
    ["The Eyrie",180,100,14,70,200,550,750,950,90,"#e09218",16],
    ["Dragonstone",180,100,14,70,200,550,750,950,90, "#e09218",18],
    ["Moat Cailin",200,100,16,80,220,600,800,1000,100,"#e09218",19],
    ["HarrenHall",220,150,18,90,250,700,875,1050,110, "#dd362d",21],
    ["The DreadFort",220,150,18,90,250,700,875,1050,110, "#dd362d",23],
    ["The Twins",240,150,20,100,300,750,925,1100,120, "#dd362d",24],
    ["Astapor",260,150,22,110,330,800,975,1150,130, "#fef200",26],
    ["Yunki",260,150,22,110,330,800,975,1150,130, "#fef200",27],
    ["Meereen",280,150,24,120,360,850,1025,1200,140, "#fef200",29],
    ["Castle Black",300,200,26,130,390,900,1100,1275,150, "#0da65b",31],
    ["Pyke",300,200,26,130,390,900,1100,1275,150,"#0da65b",32],
    ["Winterfell",320,200,28,150,450,1000,1200,1400,160, "#0da65b",34],
    ["Braavos",350,200,35,175,500,1100,1300,1500,175,"#2878bd",37],
    ["King's Landing",400,200,50,200,600,1400,1700,2000,200,"#2878bd",39],
    ["Redwasr", 150,75,150,150,150,150,150,150,150,"white",12],
    ["The Wall", 150,7,150,150,150,150,150,150,150,"white",28],
    ["House Lanister",200,25,50,100,200,200,200,200,200,"white",5],
    ["House Baratheon",200,25,50,100,200,200,200,200,200,"white",15],
    ["House Targaryen ",200,25,50,100,200,200,200,200,200,"white",25],
    ["House Stark", 200,25,50,100,200,200,200,200,200,"white",35]
]
/*
var PropertyObject =[];
for(let i = 0; i < propData.length; i++){

    var currentCard = propData[i];
    PropertyObject.push({
        "property-title": currentCard[0],
        "property-cost": currentCard[1],
        "property-rent": currentCard[2],
        "base-rent":currentCard[3],
        "rent-1":currentCard[4],
        "rent-2":currentCard[5],
        "rent-3":currentCard[6],
        "rent-4":currentCard[7],
        "rent-hotel":currentCard[8],
        "mortgage-cost":currentCard[9]

    });
    }
    console.log(PropertyObject);
*/

var propertyData = [{
        'property-title': "Craster's Keep",
        'property-position': 'position-1',
        'property-current-rent': null,
        'property-cost': 60,
        'property-rent': 50,
        'base-rent': 2,
        'rent-1': 10,
        'rent-2': 30,
        'rent-3': 90,
        'rent-4': 160,
        'rent-hotel': 250,
        'mortgage-cost': 30,
        'propertyOwner': null,
    },
    {
        'property-title': "The First of The First Men",
        'property-position': 'position-3',
        'property-current-rent': null,
        'property-cost': 60,
        'property-rent': 50,
        'base-rent': 4,
        'rent-1': 20,
        'rent-2': 60,
        'rent-3': 180,
        'rent-4': 320,
        'rent-hotel': 450,
        'mortgage-cost': 30,
        'propertyOwner': null,
    },
    {
        'property-title': "The NightFort",
        'property-position': 'position-6',
        'property-current-rent': null,
        'property-cost': 100,
        'property-rent': 50,
        'base-rent': 6,
        'rent-1': 30,
        'rent-2': 90,
        'rent-3': 270,
        'rent-4': 400,
        'rent-hotel': 550,
        'mortgage-cost': 50,
        'propertyOwner': null,
    },
    {
        'property-title': "Moles's Town",
        'property-position': 'position-8',
        'property-current-rent': null,
        'property-cost': 100,
        'property-rent': 50,
        'base-rent': 6,
        'rent-1': 30,
        'rent-2': 90,
        'rent-3': 270,
        'rent-4': 400,
        'rent-hotel': 550,
        'mortgage-cost': 50,
        'propertyOwner': null,
    },
    {
        'property-title': "The Inn at The CrossRoads",
        'property-position': 'position-9',
        'property-current-rent': null,
        'property-cost': 120,
        'property-rent': 50,
        'base-rent': 8,
        'rent-1': 40,
        'rent-2': 100,
        'rent-3': 300,
        'rent-4': 450,
        'rent-hotel': 600,
        'mortgage-cost': 60,
        'propertyOwner': null,
    },
    {
        'property-title': "Vaes Dothrak",
        'property-position': 'position-11',
        'property-current-rent': null,
        'property-cost': 140,
        'property-rent': 100,
        'base-rent': 10,
        'rent-1': 50,
        'rent-2': 150,
        'rent-3': 450,
        'rent-4': 625,
        'rent-hotel': 750,
        'mortgage-cost': 70,
        'propertyOwner': null,
    },
    {
        'property-title': "Qarth",
        'property-position': 'position-13',
        'property-current-rent': null,
        'property-cost': 140,
        'property-rent': 100,
        'base-rent': 10,
        'rent-1': 50,
        'rent-2': 150,
        'rent-3': 450,
        'rent-4': 625,
        'rent-hotel': 750,
        'mortgage-cost': 70,
        'propertyOwner': null,
    },
    {
        'property-title': "Pentos",
        'property-position': 'position-14',
        'property-current-rent': null,
        'property-cost': 160,
        'property-rent': 100,
        'base-rent': 12,
        'rent-1': 60,
        'rent-2': 180,
        'rent-3': 500,
        'rent-4': 700,
        'rent-hotel': 900,
        'mortgage-cost': 80,
        'propertyOwner': null,
    },
    {
        'property-title': "The Eyrie",
        'property-position': 'position-16',
        'property-current-rent': null,
        'property-cost': 180,
        'property-rent': 100,
        'base-rent': 14,
        'rent-1': 70,
        'rent-2': 200,
        'rent-3': 550,
        'rent-4': 750,
        'rent-hotel': 950,
        'mortgage-cost': 90,
        'propertyOwner': null,
    },
    {
        'property-title': "Dragonstone",
        'property-position': 'position-18',
        'property-current-rent': null,
        'property-cost': 180,
        'property-rent': 100,
        'base-rent': 14,
        'rent-1': 70,
        'rent-2': 200,
        'rent-3': 550,
        'rent-4': 750,
        'rent-hotel': 950,
        'mortgage-cost': 90,
        'propertyOwner': null,
    },
    {
        'property-title': "Moat Cailin",
        'property-position': 'position-19',
        'property-current-rent': null,
        'property-cost': 200,
        'property-rent': 100,
        'base-rent': 16,
        'rent-1': 80,
        'rent-2': 220,
        'rent-3': 600,
        'rent-4': 800,
        'rent-hotel': 1000,
        'mortgage-cost': 100,
        'propertyOwner': null,
    },
    {
        'property-title': "Harrenhall",
        'property-position': 'position-21',
        'property-current-rent': null,
        'property-cost': 220,
        'property-rent': 150,
        'base-rent': 18,
        'rent-1': 90,
        'rent-2': 250,
        'rent-3': 700,
        'rent-4': 875,
        'rent-hotel': 1050,
        'mortgage-cost': 110,
        'propertyOwner': null,
    },
    {
        'property-title': "The DreadFort",
        'property-position': 'position-23',
        'property-current-rent': null,
        'property-cost': 220,
        'property-rent': 150,
        'base-rent': 18,
        'rent-1': 90,
        'rent-2': 250,
        'rent-3': 700,
        'rent-4': 875,
        'rent-hotel': 1050,
        'mortgage-cost': 110,
        'propertyOwner': null,
    },
    {
        'property-title': "The Twins",
        'property-position': 'position-24',
        'property-current-rent': null,
        'property-cost': 240,
        'property-rent': 150,
        'base-rent': 20,
        'rent-1': 100,
        'rent-2': 300,
        'rent-3': 750,
        'rent-4': 925,
        'rent-hotel': 1100,
        'mortgage-cost': 120,
        'propertyOwner': null,
    },
    {
        'property-title': "Astapor",
        'property-position': 'position-26',
        'property-current-rent': null,
        'property-cost': 260,
        'property-rent': 150,
        'base-rent': 22,
        'rent-1': 110,
        'rent-2': 330,
        'rent-3': 800,
        'rent-4': 975,
        'rent-hotel': 1150,
        'mortgage-cost': 130,
        'propertyOwner': null,
    },
    {
        'property-title': "Yunki",
        'property-position': 'position-27',
        'property-current-rent': null,
        'property-cost': 260,
        'property-rent': 150,
        'base-rent': 22,
        'rent-1': 110,
        'rent-2': 330,
        'rent-3': 800,
        'rent-4': 975,
        'rent-hotel': 1150,
        'mortgage-cost': 130,
        'propertyOwner': null,
    },
    {
        'property-title': "Meereen",
        'property-position': 'position-29',
        'property-current-rent': null,
        'property-cost': 280,
        'property-rent': 150,
        'base-rent': 24,
        'rent-1': 120,
        'rent-2': 360,
        'rent-3': 850,
        'rent-4': 1025,
        'rent-hotel': 1200,
        'mortgage-cost': 140,
        'propertyOwner': null,
    },
    {
        'property-title': "Castle Black",
        'property-position': 'position-31',
        'property-current-rent': null,
        'property-cost': 300,
        'property-rent': 200,
        'base-rent': 26,
        'rent-1': 130,
        'rent-2': 390,
        'rent-3': 900,
        'rent-4': 1100,
        'rent-hotel': 1275,
        'mortgage-cost': 150,
        'propertyOwner': null,
    },
    {
        'property-title': "Pyke",
        'property-position': 'position-32',
        'property-current-rent': null,
        'property-cost': 300,
        'property-rent': 200,
        'base-rent': 26,
        'rent-1': 130,
        'rent-2': 390,
        'rent-3': 900,
        'rent-4': 1100,
        'rent-hotel': 1275,
        'mortgage-cost': 150,
        'propertyOwner': null,
    },
    {
        'property-title': "Winterfell",
        'property-position': 'position-34',
        'property-current-rent': null,
        'property-cost': 320,
        'property-rent': 200,
        'base-rent': 28,
        'rent-1': 150,
        'rent-2': 450,
        'rent-3': 1000,
        'rent-4': 1200,
        'rent-hotel': 1400,
        'mortgage-cost': 160,
        'propertyOwner': null,
    },
    {
        'property-title': "Braavos",
        'property-position': 'position-37',
        'property-current-rent': null,
        'property-cost': 350,
        'property-rent': 200,
        'base-rent': 35,
        'rent-1': 175,
        'rent-2': 500,
        'rent-3': 1100,
        'rent-4': 1300,
        'rent-hotel': 1500,
        'mortgage-cost': 175,
        'propertyOwner': null,
    },
    {
        'property-title': "King's Landing",
        'property-position': 'position-38',
        'property-current-rent': null,
        'property-cost': 400,
        'property-rent': 200,
        'base-rent': 50,
        'rent-1': 200,
        'rent-2': 600,
        'rent-3': 1400,
        'rent-4': 1700,
        'rent-hotel': 2000,
        'mortgage-cost': 200,
        'propertyOwner': null,
    },
    {
        'property-title': "Redwasr",
        'property-position': 'position-12',
        'property-current-rent': null,
        'property-cost': 150,
        'property-rent': 75,
        'base-rent': 150,
        'rent-1': 150,
        'rent-2': 150,
        'rent-3': 150,
        'rent-4': 150,
        'rent-hotel': 150,
        'mortgage-cost': 150,
        'propertyOwner': null,
    },
    {
        'property-title': "The Wall",
        'property-position': 'position-28',
        'property-current-rent': null,
        'property-cost': 150,
        'property-rent': 7,
        'base-rent': 150,
        'rent-1': 150,
        'rent-2': 150,
        'rent-3': 150,
        'rent-4': 150,
        'rent-hotel': 150,
        'mortgage-cost': 150,
        'propertyOwner': null,
    },
    {
        'property-title': "House Lanister",
        'property-position': 'position-5',
        'property-current-rent': null,
        'property-cost': 200,
        'property-rent': 25,
        'base-rent': 50,
        'rent-1': 100,
        'rent-2': 200,
        'rent-3': 200,
        'rent-4': 200,
        'rent-hotel': 200,
        'mortgage-cost': 200,
        'propertyOwner': null,
    },
    {
        'property-title': "House Baratheon",
        'property-position': 'position-15',
        'property-current-rent': null,
        'property-cost': 200,
        'property-rent': 25,
        'base-rent': 50,
        'rent-1': 100,
        'rent-2': 200,
        'rent-3': 200,
        'rent-4': 200,
        'rent-hotel': 200,
        'mortgage-cost': 200,
        'propertyOwner': null,
    },
    {
        'property-title': "House Targaryen ",
        'property-position': 'position-25',
        'property-current-rent': null,
        'property-cost': 200,
        'property-rent': 25,
        'base-rent': 50,
        'rent-1': 100,
        'rent-2': 200,
        'rent-3': 200,
        'rent-4': 200,
        'rent-hotel': 200,
        'mortgage-cost': 200,
        'propertyOwner': null,
    },
    {
        'property-title': "House Stark",
        'property-position': 'position-35',
        'property-current-rent': null,
        'property-cost': 200,
        'property-rent': 25,
        'base-rent': 50,
        'rent-1': 100,
        'rent-2': 200,
        'rent-3': 200,
        'rent-4': 200,
        'rent-hotel': 200,
        'mortgage-cost': 200,
        'propertyOwner': null,
    }
];
// create a loop to loop through the object to set the owner of the property
// in the object

for (var i =0; i< propertyData.length; i++){
  propertyData[i].ownerProperty =null;
}


//Finding Property Object Values
function findProperty(propertyName){
    var numberOfProperties = propertyData.length;
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === propertyName){
            return propertyData[propertyIndex];
        }
    }
}

function findPropertyPosition(propertyName){
    var numberOfProperties = propertyData.length;
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === propertyName){
            return propertyData[propertyIndex]['property-position'];
        }
    }
}

function findNameByPropertyPosition(position){
    var numberOfProperties = propertyData.length;
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-position'] === position){
            return propertyData[propertyIndex]['property-title'];
        }
    }
}

function findPropertyOwner(propertyName){
    var numberOfProperties = propertyData.length;
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === propertyName){
            return propertyData[propertyIndex]['propertyOwner'];
        }
    }
}

function findPropertyCost(propertyName){
    var numberOfProperties = propertyData.length;
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === propertyName){
            return propertyData[propertyIndex]['property-cost'];
        }
    }
}

function findPropertyNormalRent(propertyName){
    var numberOfProperties = propertyData.length;
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === propertyName){
            return propertyData[propertyIndex]['base-rent'];
        }
    }
}

function findPropertyCurrentRent(propertyName){
    var numberOfProperties = propertyData.length;
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === propertyName){
            return propertyData[propertyIndex]['property-current-rent'];
        }
    }
}
//****End ******/

//Updates to Property Object
function updateNewOwner (property, player){
    var numberOfProperties = propertyData.length;
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === property){
            return propertyData[propertyIndex]['propertyOwner'] = player;
        }
    }
}

function updateNewOwnerWithRent (property, player){
    var numberOfProperties = propertyData.length;
    var newProperty = findProperty(property);
    var currentPlayer = player;
    updateCurrentRentAmount();
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === property){
            return propertyData[propertyIndex]['property-current-rent'] = propertyData[propertyIndex]['base-rent'];
        }
    }
}

function updateCurrentRentAmount(property){
    var numberOfProperties = propertyData.length;
    var currentProperty = findProperty(property);
    for(var propertyIndex = 0; propertyIndex < numberOfProperties; propertyIndex++){
        if(propertyData[propertyIndex]['property-title'] === property){
            switch(propertyData[propertyIndex]['property-current-rent']){
                case null: propertyData[propertyIndex]['property-current-rent'] = propertyData[propertyIndex]['rent-1'];
                break;
                case 'rent-1': propertyData[propertyIndex]['property-current-rent'] = propertyData[propertyIndex]['rent-2'];
                break;
                case 'rent-2': propertyData[propertyIndex]['property-current-rent'] = propertyData[propertyIndex]['rent-3'];
                break;
                case 'rent-3': propertyData[propertyIndex]['property-current-rent'] = propertyData[propertyIndex]['rent-4'];
                break;
                case 'rent-4': propertyData[propertyIndex]['property-current-rent'] = propertyData[propertyIndex]['rent-hotel'];
                break;
            }
        }
    }
}
//****End ******/


