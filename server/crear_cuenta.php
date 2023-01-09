<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Content-Security-Policy: upgrade-insecure-requests');
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);
    $cifrado = json_encode("fallo");
    $BD = new mysqli("bd045qqju18aauwzj2c1-mysql.services.clever-cloud.com", "un1zfhsf0avjrsck", "qRKoilSm3E55t0D0rLM9", "bd045qqju18aauwzj2c1");
    $usuario = trim($jsonObj->usuario);
    $contra = trim($jsonObj->contra);
    $sql = " INSERT INTO Usuarios(nombre,contra) values('{$usuario}','{$contra}')";
    $res = $BD->query($sql);
    if($res)
        $cifrado = json_encode("exito");
    else {
        $BD->next_result();
        $sql = "SELECT * FROM Usuarios WHERE nombre = '{$usuario}'";
        $res = $BD->query($sql);
        if($res){
            if($res->num_rows > 0)
                $cifrado = json_encode("nombre-igual");
        }
    }
    $BD->close();
    echo $cifrado;
?>