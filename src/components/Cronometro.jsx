import React, { useState, useEffect } from "react";

export default function Cronometro() {
  const [tiempo, setTiempo] = useState({
    cs: 0,
    s: 0,
    m: 0
  });
  const [corriendo, setCorriendo] = useState(false);
  const [fecha, setFecha] = useState(new Date());
  let intervalo;
  let updatedCs = tiempo.cs,
    updatedS = tiempo.s,
    updatedM = tiempo.m;

  const run = () => {
    if (updatedS === 10) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedCs === 100) {
      updatedS++;
      updatedCs = 0;
    }

    updatedCs++;

    return setTiempo({ cs: updatedCs, s: updatedS, m: updatedM });
  };

  useEffect(() => {
    let storedData = localStorage.getItem("cronometroData");
    if (storedData) {
      storedData = JSON.parse(storedData);
      setTiempo(storedData.tiempo);
      setCorriendo(storedData.corriendo);
    }
  }, []);

  useEffect(() => {
    if (corriendo) {
      intervalo = setInterval(() => {
        run();
      }, 10);
    } else {
      clearInterval(intervalo);
      localStorage.setItem(
        "cronometroData",
        JSON.stringify({ tiempo, corriendo })
      );
    }
    return () => clearInterval(intervalo);
  }, [corriendo, tiempo]);

  useEffect(() => {
    let fechaInterval = setInterval(() => {
      setFecha(new Date());
    }, 1000);
    return () => clearInterval(fechaInterval);
  }, []);

  function iniciar() {
    setCorriendo(true);
  }

  function detener() {
    setCorriendo(false);
  }

  function reiniciar() {
    setCorriendo(false);
    setTiempo({ cs: 0, s: 0, m: 0 });
    localStorage.removeItem("cronometroData");
  }

  const formattedTime = `${tiempo.m
    .toString()
    .padStart(2, "0")}:${(tiempo.s % 10).toString().padStart(2, "0")}:${(
    tiempo.cs % 100
  ).toString().padStart(2, "0")}`;
  return (
    <div className="w-10/12 space-x-5 m-2 flex justify-evenly items-center bg-slate-500/20 rounded-md p-5">
      {/* <h1 class="text-3xl">{formatTime(hours, minutes, seconds)}</h1> */}
      <h2>{fecha.toLocaleTimeString()}</h2>
      <h3>{fecha.toLocaleDateString()}</h3>
      <h2 className={`text-5xl `}> {formattedTime} </h2>
      <div className="flex flex-col self-center gap-4 [&_button]:p-2">
        <button onClick={() => iniciar()} className=" bg-green-500 p-1 rounded-md">
          Iniciar
        </button>
        <button onClick={() => detener()} className="p-1 bg-indigo-600 rounded-md">
          Detener
        </button>
        <button onClick={() => reiniciar()} className="bg-red-500 p-1 rounded-md">
          Reiniciar
        </button>
      </div>
    </div>
  );
}
