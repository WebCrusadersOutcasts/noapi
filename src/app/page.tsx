import Link from "next/link";
import ToolsCard from "./components/Tools";
import { Grid, Typography } from "@mui/material";

export default function Home() {
  const toolsList = [
    {
      name: "Boston House Price Prection",
      description: "Plottings of Crime locations and respective heat maps",
      link: "/spatial-analysis",
      image: "/images/spatial_analysis.png",
    },
  ];

  return (
    <>
      <header style={{ padding: "10px 3px", height: "150px", textAlign: "center", background: "#35353f", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* <img src="/images/logo.png" alt="Logo" style={{ width: "100px", height: "auto", marginRight: "10px" }} /> */}
        <Typography variant="h3" style={{ margin: "0" }}>Predictive Crime Analysis Tools</Typography>
      </header>
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {toolsList.map((el, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link href={el.link}>
              <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", height: "100%" }}>
                <ToolsCard
                  name={el.name}
                  description={el.description}
                  image={el.image}
                />
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
      <footer style={{ padding: "20px", textAlign: "center", background: "black", color: "white" }}>
        <Typography variant="body1">&copy; Made By Web Crusaders </Typography>
      </footer>
    </>
  );
}
