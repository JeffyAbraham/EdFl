function QuotePicker(weather)
{
    switch (weather) {
        case "Thunderstorm":
          return 'If there were no thunder, men would have little fear of lightning.' 

          break;
        case "Drizzle":
          return '"For a second I was almost jealous of the clouds'
          break;
        case "Rain":
          return 'The way I see it,if you want the rainbow you gotta put up with the rain -Dolly Parton';
          break;
        case "Snow":
          return 'Nature is full of genius, full of divinity; so that not a snowflake escapes its fashioning hand.';
          break;
        case "Clear":
          return "Keep your face to the sun and you will never see the shadows  Helen Keller";
          break
        case   'Cloudy':
            return '“Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.-Buddha”'
       
        default:
          return 'None but ourselves can free our minds..';
      }






}


export default QuotePicker;