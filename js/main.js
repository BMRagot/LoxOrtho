var CtePI = 3.14159265358979;
var Cte2PI = CtePI * 2;
var CteNMRad = (CtePI / (180 * 60));
var CteRadNM = ((180 * 60) / CtePI);
var CteDegRad = (CtePI / 180);
var CteRadDeg = (180 / CtePI);

  $(function () { $("input").jqBootstrapValidation({                        preventSubmit: true,submitError: function($form, event, errors) {
                            // Here I do nothing, but you could do something like display 
                            // the error messages to the user, log, etc.
                        },
                        submitSuccess: function($form, event) {
                            alert("OK");
                            event.preventDefault();
                        },
                        filter: function() {
                            return $(this).is(":visible");
                        }
}); } );


$(document).ready(function() {
	//size();

	$('#goButton').click(function(){
			
		OrLat = $('#OrigLat').val().toUpperCase();
		OrLon = $('#OrigLon').val().toUpperCase();
		BuLat = $('#ButLat').val().toUpperCase();
		BuLon = $('#ButLon').val().toUpperCase();
		
		$('#LoxoCap').text(FctFormatRoute(FctRouteLoxo(FctLatToDouble(OrLat),FctLonToDouble(OrLon),FctLatToDouble(BuLat),FctLonToDouble(BuLon))));
		$('#LoxoDis').text(FctDistanceLoxo(FctLatToDouble(OrLat),FctLonToDouble(OrLon),FctLatToDouble(BuLat),FctLonToDouble(BuLon)));
		$('#OrthCap').text(FctFormatRoute(FctRouteOrtho(FctLatToDouble(OrLat),FctLonToDouble(OrLon),FctLatToDouble(BuLat),FctLonToDouble(BuLon))));
		$('#OrthDis').text(FctDistanceOrtho(FctLatToDouble(OrLat),FctLonToDouble(OrLon),FctLatToDouble(BuLat),FctLonToDouble(BuLon)));
	
	});	
	
	
});

// Conversion d'un angle exprimŽ en degrŽs en sa valeur en radians
function FctRadians(ParDegres) {
    return ParDegres * CteDegRad;
}

// Conversion d'un angle exprimŽ en radians en sa valeur en degrŽs
function FctDegres(ParRadians ){
   return ParRadians * CteRadDeg;
}

// Conversion d'une distance de NM en radians
function FctNMRadians(ParNM){
    return CteNMRad * ParNM;
}

// Conversion d'une distance de radians en NM
function FctRadiansNM(ParRadians){
   return CteRadNM * ParRadians;
}

// Conversion d'une latitude au format N010203 ou 010203N en numŽrique
function FctLatToDouble(ParLat) {
    
	var LocDbl;
    var LocHeures;
    var LocMinutes;
    var LocSecondes;
    var LocFlag;
    var LocStr;

    LocStr = ParLat;// + "00"
    
    if (LocStr.substring(1, 1) > "9"){
        switch(LocStr.substring(1,1)){
            case "N":
                LocHeures = parseInt(LocStr.substring(2,2))
                LocMinutes = parseInt(LocStr.substring(4,2))
                LocSecondes = parseFloat(LocStr.substring(6,2) + "." +LocStr.substring( 8, 2))
                LocFlag = 1;
            break;
            case "S":
                LocHeures = parseInt(LocStr.substring(2, 2))
                LocMinutes = parseInt(LocStr.substring(4, 2))
                LocSecondes = parseFloat(LocStr.substring(6, 2) + "." + LocStr.substring(8, 2))
                LocFlag = -1;
            break;
            default:
                LocFlag = 0;
            break;
        }
    }else{
        switch( LocStr.substring(7,6)){
            case "N":
                LocHeures = parseInt(LocStr.substring( 0, 2))
                LocMinutes = parseInt(LocStr.substring( 2, 4))
                LocSecondes = parseInt(LocStr.substring(4, 6))
                LocFlag = 1
            break;
            case "S":
                LocHeures = parseInt(LocStr.substring( 0, 2))
                LocMinutes = parseInt(LocStr.substring( 2, 4))
                LocSecondes = parseInt(LocStr.substring( 4, 6))
                LocFlag = -1;
            break;
            default:
                LocFlag = 0;
            break;
        }
    }
    LocDbl = FctRadians(LocHeures + (LocMinutes / 60) + (LocSecondes / 3600))
    if (LocDbl > CtePI){
        LocFlag = 0;
    }
    if (LocFlag == 0) {
    //        MsgBox (">" & ParLat & "< n'est pas une latitude valide")
        LocDbl = 0
    }else{
        LocDbl = LocDbl * LocFlag;
	}
    return LocDbl;
}

// Conversion d'une longitude au format W0010203 ou 0010203W en numŽrique
function FctLonToDouble(ParLon){
    
	var LocDbl;
    var LocHeures;
    var LocMinutes;
    var LocSecondes;
    var LocFlag;
    var LocStr;
    
    LocStr = ParLon + "00"
    
    if (LocStr.substring(1, 1) > "9"){
    	    	alert(LocStr.substring(1, 2));

        switch (LocStr.substring(1, 2)){
            case "W":
                LocHeures = parseInt(LocStr.substring(2,3));
                LocMinutes = parseInt(LocStr.substring(5,2));
               // LocSecondes = parseInt(LocStr.substring(7,2) + "." + LocStr.substring(9,2));
                LocFlag = 1;
                                alert("dewou");

            break;
            case "E":
                LocHeures = parseInt(LocStr.substring(2,3))
                LocMinutes = parseInt(LocStr.substring(5,2))
                LocSecondes = parseInt(LocStr.substring(7,2) + "." + LocStr.substring(9,2))
                LocFlag = -1;
            break;
            default:
                LocFlag = 0;
            break;
        }
    }else{
        switch (LocStr.substring(7,8)){
            case "W":
                LocHeures = parseInt(LocStr.substring(0,3));
                LocMinutes = parseInt(LocStr.substring(3,5));
                LocSecondes = parseInt(LocStr.substring(5,7));
                LocFlag = 1;
            break;
            case "E":
                LocHeures = parseInt(LocStr.substring(0,3));
                LocMinutes = parseInt(LocStr.substring(3,5));
                LocSecondes = parseInt(LocStr.substring(5,7));
                LocFlag = -1;
            break;
            default:
                LocFlag = 0;
            break;
        }
    }
    LocDbl = FctRadians(LocHeures + (LocMinutes / 60) + (LocSecondes / 3600));
    if (LocDbl > (2 * CtePI)){
        LocFlag = 0;
    }
    if (LocFlag == 0){
   //        MsgBox (">" & ParLon & "< n'est pas une logitude valide")
        LocDbl = 0;
    }else{
        LocDbl = LocDbl * LocFlag;
	}
   return LocDbl;
}

// Affichage d'une route sur 3 caractres, 360 si 000
function FctFormatRoute(ParRoute){
        
    LocInt = mod2(ParRoute,360);    
    if (LocInt == 0){
        return "360";
    }else{
        return FormatNumberLength(Math.round(LocInt), 3);
    }
}

//Calcul de la route orthodromique entre 2 points dŽfinis par latitude/longitude
function FctRouteOrtho(ParLat1, ParLon1, ParLat2 , ParLon2 ) {
    var FctRouteOrtho;
    LocDTG =2*asin2(Math.sqrt(Math.pow(Math.sin((ParLat1 - ParLat2) / 2), 2)+Math.cos(ParLat1)*Math.cos(ParLat2)*Math.pow(Math.sin((ParLon1 - ParLon2)/2),2)));
    if (Math.sin(ParLon2 - ParLon1) < 0){
        FctRouteOrtho = FctDegres(acos2((Math.sin(ParLat2) - Math.sin(ParLat1) * Math.cos(LocDTG)) /(Math.sin(LocDTG) * Math.cos(ParLat1))))
    }else{
        FctRouteOrtho = FctDegres(Cte2PI - acos2((Math.sin(ParLat2) - Math.sin(ParLat1) * Math.cos(LocDTG)) / (Math.sin(LocDTG) * Math.cos(ParLat1))))
    }
    return FctRouteOrtho;
}

//Calcul de la distance orthodromique entre 2 points dŽfinis par latitude/longitude
function FctDistanceOrtho(ParLat1, ParLon1,ParLat2 ,ParLon2){
    return FctRadiansNM(2 * asin2(Math.sqrt(Math.pow(Math.sin((ParLat1 - ParLat2) / 2), 2)  + Math.cos(ParLat1) * Math.cos(ParLat2) * Math.pow(Math.sin((ParLon1 - ParLon2) / 2), 2)))).toFixed(2);
}

//Calcul de la route loxodromique entre 2 points dŽfinis par latitude/longitude
function FctRouteLoxo(ParLat1, ParLon1, ParLat2, ParLon2 ) {
    LocDeltaLat = ParLat2 - ParLat1;
    if (Math.abs(ParLon2 - ParLon1) > CtePI ){
        if ((ParLon2 - ParLon1) > 0 ){
            LocDeltaLon = -(Cte2PI - (ParLon2 - ParLon1)) * Math.cos(Math.abs(ParLat2 + ParLat1) / 2);
        }else{
            LocDeltaLon = (Cte2PI + (ParLon2 - ParLon1)) * Math.cos(Math.abs(ParLat2 + ParLat1) / 2);
        }
    }else{
        LocDeltaLon = (ParLon2 - ParLon1) * Math.cos(Math.abs(ParLat2 + ParLat1) / 2);
	}
    return FctDegres(atn2(LocDeltaLat, -LocDeltaLon));
}

// Calcul de la distance loxodromique entre 2 points dŽfinis par latitude/longitude
function FctDistanceLoxo(ParLat1, ParLon1 , ParLat2, ParLon2 ) {
    LocDeltaLat = ParLat2 - ParLat1
    if (Math.abs(ParLon2 - ParLon1) > CtePI){
        LocDeltaLon = (Cte2PI - Math.abs(ParLon2 - ParLon1)) * Math.cos(Math.abs(ParLat2 + ParLat1) / 2);
    }else{
        LocDeltaLon = (ParLon2 - ParLon1) * Math.cos(Math.abs(ParLat2 + ParLat1) / 2);
    }
    return FctRadiansNM(Math.sqrt(Math.pow(LocDeltaLat, 2) + Math.pow(LocDeltaLon,2))).toFixed(2);
}

function atn2(ParX, ParY){
    var atn2;
    if (ParX > 0){
        atn2 = Math.atan(ParY / ParX);
    }else if (ParX == 0){
        if (ParY >= 0){
            atn2 = CtePI / 2;
        }else{
            atn2 = -CtePI / 2;
			}
    }else{
        if (ParY >= 0){
            atn2 = Math.atan(ParY / ParX) + CtePI;
        }else{
            atn2 = Math.atan(ParY / ParX) - CtePI;
        }
	}
	return atn2;
}

function asin2(ParX){
    return atn2(Math.sqrt(1 - Math.pow(ParX, 2)), ParX);
}

function acos2(ParX){
    return atn2(ParX, Math.sqrt(1 - Math.pow(ParX, 2)));
}

function mod2(ParY, ParX){
    var mod2;
    if (ParY >= 0){
        mod2 = ParY - (ParX * Math.floor(ParY / ParX));
    }else{
        LocDbl = ParY + (ParX * (Math.floor(-ParY / ParX) + 1));
        if (LocDbl == ParX) {
            mod2 = 0
        }else{
            mod2 = LocDbl
        }
    }
    return mod2;
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function size(){
	
	var h=$(window).height()-$('#footer').height()-$(".navbar").height();
alert(h);
	$(".well").height(h*0.80);
}