

var k= document.getElementById("input_k");
var tao= document.getElementById("input_tao");
var t0= document.getElementById("input_t0");
var boton=document.getElementById("boton");
var controlador_js=document.getElementById("controlador");

var kp;
var r=document.getElementById("resultado");
var Ti;
var Td;
var kd;
var ki;


function calcular(){
    k.value=parseFloat(k.value);
    t0.value=parseFloat(t0.value);
    tao.value=parseFloat(tao.value);
    

    if (controlador_js.value=="REGULACION A PERTURBACIONES IAE PI")
    {
        var a1=0.984;
        var b1=-0.986;
        var a2=0.608;
        var b2=0.707;
        kp=(a1/k.value)*Math.pow((t0.value/tao.value),b1);
        Ti=(tao.value/a2)*Math.pow((t0.value/tao.value),b2);
        ki=kp/Ti;
        if (isNaN(kp))
        {
            r.innerHTML= "Ingrese unos valores validos de K, T0 y Tao";  
        }
        else
        {   
            r.innerHTML="Los parametros calculados del controlador PI son:"+"<br/>"+"Kp= "+kp.toFixed(4)+"<br/>" +"Ki= "+ ki.toFixed(4);
        }

    }
    else if (controlador_js.value=="REGULACION A PERTURBACIONES ITAE PID")
    {
        var a1=1.357;
        var b1=-0.947;
        var a2=0.842;
        var b2=0.738;
        var a3=0.381;
        var b3=0.995;

        kp=(a1/k.value)*Math.pow((t0.value/tao.value),b1);
        Ti=(tao.value/a2)*Math.pow((t0.value/tao.value),b2);
        Td=(a3*tao.value)*Math.pow((t0.value/tao.value),b3);
        ki=kp/Ti;
        kd=kp*Td;
        if (isNaN(kp))
        {
            r.innerHTML= "Ingrese unos valores validos de K, T0 y Tao";  
        }
        else
        {   
            r.innerHTML="Los parametros calculados del controlador PID son:"+"<br/>"+"Kp= "+kp.toFixed(4)+"<br/>" +"Ki= "+ ki.toFixed(4) +"<br/>"+"Kd= "+ kd.toFixed(4);
        }

    }
    else if (controlador_js.value=="PUNTO DE CONTROL, SEGUIMIENTO, IAE PID")
    {
        var a1=1.086;
        var b1=-0.869;
        var a2=0.740;
        var b2=-0.130;
        var a3=0.348;
        var b3=0.914;

        kp=(a1/k.value)*Math.pow((t0.value/tao.value),b1);
        Ti=(tao.value/a2)*Math.pow((t0.value/tao.value),b2);
        Td=(a3*tao.value)*Math.pow((t0.value/tao.value),b3);
        ki=kp/Ti;
        kd=kp*Td;
        if (isNaN(kp))
        {
            r.innerHTML= "Ingrese unos valores validos de K, T0 y Tao";  
        }
        else
        {   
            r.innerHTML="Los parametros calculados del controlador PID son:"+"<br/>"+"Kp= "+kp.toFixed(4)+"<br/>" +"Ki= "+ ki.toFixed(4) +"<br/>"+"Kd= "+ kd.toFixed(4);
        }
    }

    else if (controlador_js.value=="PUNTO DE CONTROL, SEGUIMIENTO, ITAE PID")
    {
        var a1=0.965;
        var b1=-0.855;
        var a2=0.796;
        var b2=-0.147;
        var a3=0.308;
        var b3=0.9292;

        kp=(a1/k.value)*Math.pow((t0.value/tao.value),b1);
        Ti=(tao.value/a2)*Math.pow((t0.value/tao.value),b2);
        Td=(a3*tao.value)*Math.pow((t0.value/tao.value),b3);
        ki=kp/Ti;
        kd=kp*Td;
        if (isNaN(kp))
        {
            r.innerHTML= "Ingrese unos valores validos de K, T0 y Tao";  
        }
        else
        {   
            r.innerHTML="Los parametros calculados del controlador PID son:"+"<br/>"+"Kp= "+kp.toFixed(4)+"<br/>" +"Ki= "+ ki.toFixed(4) +"<br/>"+"Kd= "+ kd.toFixed(4);
        }
    }

}


boton.addEventListener("click",calcular);