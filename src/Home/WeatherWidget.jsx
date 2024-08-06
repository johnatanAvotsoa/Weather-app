import React, { useEffect } from 'react';

const WeatherWidget = () => {
  useEffect(() => {
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
      id: 15,
      cityid: '1070940',
      appid: 'f5aa32542a6f65ae50b69b68e354a82b',
      units: 'metric',
      containerid: 'openweathermap-widget-15',
    });

    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
    document.getElementsByTagName('script')[0].parentNode.insertBefore(script, null);

    return () => {
      document.getElementById('openweathermap-widget-15').innerHTML = '';
    };
  }, []);

  return <div id="openweathermap-widget-15"></div>;
};

export default WeatherWidget;
