AOS.init();

const dataDoEvento = new Date("Nov 10, 2024 17:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const constaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60

   const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
   const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
   const minutosAteOevento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
   const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOevento}m ${segundosAteOEvento}s`;

    if(diasAteOEvento < 0 ){
        clearInterval(constaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }
},1000)