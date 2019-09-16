<?php
  $recepient = "rostsangs@mail.ru";
  $nameSite = "Портфолио";

  $name = trim($_POST['name']);
  $mail = trim($_POST['mail']);
  $text = trim($_POST['text']);
  $message = "Имя: $name \nПочта: $mail \nСообщение: $text";
  $pageTitle = "Новое сообщение с сайта \"$nameSite\"";

  mail($recepient, $pageTitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
