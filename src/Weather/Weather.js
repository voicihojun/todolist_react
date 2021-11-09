import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleCurrentLocationOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const API_KEY = "f7fe21bbdb94774cf7eff66143dc833d";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCity(`${data.name}, ${data.sys.country}`);
        setWeather(`${data.weather[0].main}`);
        setTemperature(`${data.main.temp}`);
      });
  }

  function handleCurrentLocationError() {
    alert("Can't find you. No weather for you.");
  }

  navigator.geolocation.getCurrentPosition(
    handleCurrentLocationOk,
    handleCurrentLocationError
  );

  return (
    <div id="weather">
      {city ? (
        <span>
          {temperature} ℃, {weather} in {city}
        </span>
      ) : null}
    </div>
  );
}

export default Weather;

// - npm i gh-pages 실행
// - package.json에 "homepage" : "https://voicihojun.github.io/movie_app_02" 를 추가한다.

// - npm run build를 실행한다. (아마도 이 과정은 생략가능)
// - build 폴더가 생성된 것을 확인한다(최소화된 파일들) (생략가능 : 왜냐하면 아래서 npm deploy 하는 순간 위의 부분이 실행되기 때문)

// - package.json의 script에 "deploy" : "gh-pages -d build" 추가(생성된 빌드 폴더를 deploy 한다는 뜻으로 build 폴더 이름이 다르다면 그것에 맞춰서 설정해야 함.)
// - package.json의 script에 "predeploy" : "npm run build"
// - 위의 과정을 설명하자면, npm run deploy를 실행시, predeploy의 npm run build가 실행되고 "react-scripts build"에 의해서 build 파일이 생성된다. 그리고 deploy의 명령어에 따라 gh-pages로 생성된 build 파일을 deploy한다.
