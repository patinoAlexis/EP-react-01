<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Content-Security-Policy: upgrade-insecure-requests');
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);
    // $cifrado = json_encode("fallo");
    $BD = new mysqli("bd045qqju18aauwzj2c1-mysql.services.clever-cloud.com", "un1zfhsf0avjrsck", "qRKoilSm3E55t0D0rLM9", "bd045qqju18aauwzj2c1");
    $usuario = trim($jsonObj->usuario);
    $contra = trim($jsonObj->contra);
    $id_usuario = $jsonObj->usuario;
    $sql = " INSERT INTO Contras(nombre,contra,idUsuario) values('{$usuario}','{$contra}',{$id_usuario})";
    $res = $BD->query($sql);
    if($res)
        $cifrado = json_encode("exito");
    else {
        $cifrado = json_encode($BD->error);
    }
    $BD->close();
    echo $cifrado;
?>