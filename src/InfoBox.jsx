import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({ info }) {
  if (!info) return null;

  let COLD_URL = "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL = "https://images.unsplash.com/photo-1501973801540-537f08ccae7b";
  let RAIN_URL = "https://tse3.mm.bing.net/th/id/OIP.Rq8-yBMgBkyRnqAxS1zqZAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3";

  let isRain = info.humidity > 80;
  let isHot = info.temp > 15;

  let imageUrl = isRain ? RAIN_URL : isHot ? HOT_URL : COLD_URL;

  let WeatherIcon = isRain
    ? <ThunderstormIcon />
    : isHot
    ? <SunnyIcon />
    : <AcUnitIcon />;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={imageUrl} />

          <CardContent>
            <Typography gutterBottom variant="h5">
              {info.city} {WeatherIcon}
            </Typography>

            <Typography variant="body2" component="span">
              <p>Temperature = {info.temp}&deg;c</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;c</p>
              <p>Max Temp = {info.tempMax}&deg;c</p>
              <p>
                Weather: <i>{info.weather}</i>, feels like {info.feelsLike}&deg;c
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}