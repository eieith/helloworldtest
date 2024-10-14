import express from "express";
const app = express();
const port = 3000;
import path from "path";
const __dirname = import.meta.dirname;

app.set('view engine', 'ejs'); // or the engine you're using
app.set('views', path.join(__dirname, '../public')); // Adjust the path if necessary
app.use(express.static(path.join(__dirname, '../public')));


app.get('/',function(req,res){
  var mascots=[
  {name:'Sammy',organization:"DigitalOcean",birth_year:2012},
  {name:'Tux',oranganization:"Linux",birth_year:1996},
  {name:'Moby Dock',Organization:"Docker",birth_year:2013}
  ];
  var tagline="No programming concept is complete without a cute animal mascot.";
  res.render('index',{
  mascots: mascots,
  tagline: tagline
  });
  });
  
app.put("/", (req, res) => {
  res.send("Hello World! from put");
});app.post("/", (req, res) => {
  res.send("Hello World! from post");
});app.delete("/", (req, res) => {
  res.send("Hello World! from delete");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map
