var CtePI = 3.14159265358979;
var Cte2PI = CtePI * 2;
var CteNMRad = (CtePI / (180 * 60));
var CteRadNM = ((180 * 60) / CtePI);
var CteDegRad = (CtePI / 180);
var CteRadDeg = (180 / CtePI);

  /* $(function () { */ $("input").jqBootstrapValidation({
       preventSubmit: true,
	   submitError: function($form, event, errors) {
                            // Here I do nothing, but you could do something like display 
                            // the error messages to the user, log, etc.
	    },
	    submitSuccess: function($form, event) {
	        event.preventDefault();
	    },
	    filter: function() {
	        return $(this).is(":visible");
	    }
});/*  } ); */

$('#OrigLat, #ButLat').scroller({
                    theme: 'ios7',
                    mode: 'scroller',
                    lang: 'fr',
                    display: 'bottom',
                    animate: 'slideup',
                    showLabel: true,
                    wheels: [
				    [
				        {
				            label: ' °', 
				            values: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90'], 
				        }, 
				    ], 
				    [
				        { 
				            label: '\'', 
				            values: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59']
				        }, 
				    ],[  
				        {
				            label: '"', 
				             values: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59']
				        } 
				    ],[ 
				        { 
				            label: '', 
				            values: ['N','S'], 
				        }, 
						]],
					formatResult: function(data){
						return data[0]+"° "+data[1]+"' "+data[2]+"\" "+data[3];
					}
      });
$('#OrigLon, #ButLon').scroller({
                    theme: 'ios7',
                    mode: 'scroller',
                    lang: 'fr',
                    display: 'bottom',
                    animate: 'slideup',
                    showLabel: true,
                    wheels: [
				    [
				        {
				            label: ' °', 
				             values: ['000','001','002','003','004','005','006','007','008','009','010','011','012','013','014','015','016','017','018','019','020','021','022','023','024','025','026','027','028','029','030','031','032','033','034','035','036','037','038','039','040','041','042','043','044','045','046','047','048','049','050','051','052','053','054','055','056','057','058','059','060','061','062','063','064','065','066','067','068','069','070','071','072','073','074','075','076','077','078','079','080','081','082','083','084','085','086','087','088','089','090','091','092','093','094','095','096','097','098','099','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181', '182', '183','184','185','186','187','188','189','190']
						}
					], 
				    [
				        {
				            label: '\'', 
				            values: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41', '42', '43','44','45','46','47','48','49','50','51', '52', '53','54','55','56','57','58','59']
				        }, 
				    ],[  
				        {
				            label: '"', 
				             values: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59']
				        } 
				    ],[ 
				        {
				            label: '', 
				            values: ['W','E'], 
				        }, 
						]],
					formatResult: function(data){
						return data[0]+"° "+data[1]+"' "+data[2]+"\" "+data[3];
					}
      });

$('#OrigLat, #ButLat,#OrigLon, #ButLon').prop('readonly', false);

$(document).ready(function() {

	$('#goButton').click(function(){
			
		OrLat = $('#OrigLat').val().replace("° ","/").replace("' ","/").replace("\" ","/").split("/").join("");
		OrLon = $('#OrigLon').val().replace("° ","/").replace("' ","/").replace("\" ","/").split("/").join("");
		BuLat = $('#ButLat').val().replace("° ","/").replace("' ","/").replace("\" ","/").split("/").join("");
		BuLon = $('#ButLon').val().replace("° ","/").replace("' ","/").replace("\" ","/").split("/").join("");


		$('#LoxoCap').text(FctFormatRoute(FctRouteLoxo(FctLatToDouble(OrLat),FctLonToDouble(OrLon),FctLatToDouble(BuLat),FctLonToDouble(BuLon))));
		$('#LoxoDis').text(FctDistanceLoxo(FctLatToDouble(OrLat),FctLonToDouble(OrLon),FctLatToDouble(BuLat),FctLonToDouble(BuLon)));
		$('#OrthCap').text(FctFormatRoute(FctRouteOrtho(FctLatToDouble(OrLat),FctLonToDouble(OrLon),FctLatToDouble(BuLat),FctLonToDouble(BuLon))));
		$('#OrthDis').text(FctDistanceOrtho(FctLatToDouble(OrLat),FctLonToDouble(OrLon),FctLatToDouble(BuLat),FctLonToDouble(BuLon)));
	
	});	
	
	
});

// Conversion d'un angle exprimé en degrés en sa valeur en radians
function FctRadians(ParDegres) {
    return ParDegres * CteDegRad;
}

// Conversion d'un angle exprimé en radians en sa valeur en degrés
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

// Conversion d'une latitude au format N010203 ou 010203N en numérique
function FctLatToDouble(ParLat) {
    
	var LocDbl;
    var LocHeures;
    var LocMinutes;
    var LocSecondes;
    var LocFlag;
    var LocStr;

    LocStr = ParLat;
    
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

// Conversion d'une longitude au format W0010203 ou 0010203W en numérique
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

// Affichage d'une route sur 3 caractères, 360 si 000
function FctFormatRoute(ParRoute){
        
    LocInt = mod2(ParRoute,360);    
    if (LocInt == 0){
        return "360";
    }else{
        return FormatNumberLength(Math.round(LocInt), 3);
    }
}

//Calcul de la route orthodromique entre 2 points définis par latitude/longitude
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

//Calcul de la distance orthodromique entre 2 points définis par latitude/longitude
function FctDistanceOrtho(ParLat1, ParLon1,ParLat2 ,ParLon2){
    return FctRadiansNM(2 * asin2(Math.sqrt(Math.pow(Math.sin((ParLat1 - ParLat2) / 2), 2)  + Math.cos(ParLat1) * Math.cos(ParLat2) * Math.pow(Math.sin((ParLon1 - ParLon2) / 2), 2)))).toFixed(2);
}

//Calcul de la route loxodromique entre 2 points définis par latitude/longitude
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

// Calcul de la distance loxodromique entre 2 points définis par latitude/longitude
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
