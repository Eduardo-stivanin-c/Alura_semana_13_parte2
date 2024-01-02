echo "este script só funciona em executar como admistrador nele">>configurandoWindows.ps1.log
#configurado o Json-server biblioteca do Node JS
echo " o Script precisa ser executado na pasta dum projeto do Node JS pra funcionar corretamente">>configurandoWindows.ps1.log
#instalando biblioteca 
npm install json-server -g>>configurandoWindows.ps1.log

#só funciona dentro da pasta do sue projeto em Node JS
npm init>>configurandoWindows.ps1.log


#configura o Windows por Json server rodar no Node JS(digita A para todos)
Set-ExecutionPolicy RemoteSigned
#autoriza script de origem externa
