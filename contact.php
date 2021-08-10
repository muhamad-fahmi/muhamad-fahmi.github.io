<?php

function kirimTelegram($pesan) {
    $API = "https://api.telegram.org/bot1891670113:AAHSWnXdd6OsjTpHfbCCt-rZ7Os7v8trJBY/sendmessage?chat_id=989986912&text=$pesan";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_URL, $API);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

if(isset($_POST['nama'], $_POST['nohp'], $_POST['message'])){
    $nama = addslashes($_POST['nama']);
    $nohp = addslashes($_POST['nohp']);
    $message = addslashes($_POST['message']);
    kirimTelegram('Hi I am '.$nama.
    'My number phone is : '.$nohp.
    $message);

}else {
    header('location:/');
}
?>