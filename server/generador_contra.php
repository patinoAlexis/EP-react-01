<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Content-Security-Policy: upgrade-insecure-requests');
    header("Access-Control-Allow-Credentials: true");
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);

    $letras_min = 'abcdefghijklmnopqrstuvwxyz';
    $letras_may = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $numeros = '1234567890';
    $especiales = '*!^&@#%$';
    $opciones = [];
    ($jsonObj->mayuscula  || $jsonObj ->minuscula) ? array_push($opciones,"letras","letras","letras","letras","letras","letras") : false;
    $jsonObj->especiales ? array_push($opciones,"especiales","especiales","especiales") : false;
    $jsonObj->digitos ? array_push($opciones,"digitos","digitos","digitos") : false;

    $letras = false;
    if($jsonObj->mayuscula){
        if($jsonObj->minuscula)
            $letras = 'ambas';
        else
            $letras = $letras_may;
    } else{
        $letras = $letras_min;
    }
    //Se saca un numero aleatorio
    srand (time() + floor(microtime(true) * 1000));
    $max = intval($jsonObj->caracteres);
    $contra = '';
    for ($i=0; $i < $max ; $i++) { 
        $tipo = rand(0,count($opciones) - 1);
        $caracter = '';
        if($opciones[$tipo] === 'letras'){
            $temp = $letras;
            if($letras === 'ambas'){
                $tipo = rand(0,1);
                $temp = $tipo === 0 ? $letras_may : $letras_min;
            }
            $caracter_num = rand(0,strlen($temp) - 1);
            $caracter = $temp[$caracter_num];

        } else if($opciones[$tipo] === 'digitos'){
            $caracter_num = rand(0,strlen($numeros) - 1);
            $caracter = $numeros[$caracter_num];

        } else if($opciones[$tipo] === 'especiales'){
            $caracter_num = rand(0,strlen($especiales) - 1);
            $caracter = $especiales[$caracter_num];
        }
        $contra .= $caracter;
    }

    echo json_encode($contra);
?>