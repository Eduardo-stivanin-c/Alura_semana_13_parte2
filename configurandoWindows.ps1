echo "este script s� funciona em executar como admistrador nele">>configurandoWindows.ps1.log
#configurado o Json-server biblioteca do Node JS
echo " o Script precisa ser executado na pasta dum projeto do Node JS pra funcionar corretamente">>configurandoWindows.ps1.log
#instalando biblioteca 
npm install json-server -g>>configurandoWindows.ps1.log

#s� funciona dentro da pasta do NOde JS
npm init>>configurandoWindows.ps1.log


#configura o Windows por Json server rodar no Node JS(clica sim para todos)
Set-ExecutionPolicy RemoteSigned