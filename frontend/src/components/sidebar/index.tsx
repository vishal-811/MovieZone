import { Link, useLocation } from "react-router-dom"
import { Box , Typography ,Hidden } from "@mui/material"
import NavBookmark from "../../assets/icons/nav-bookmark.svg"
import NavHome from "../../assets/icons/nav-home.svg"
import NavMovies from "../../assets/icons/nav-movies.svg"
import NavTvseries from "../../assets/icons/nav-tvseries.svg"
import NavLogin from "../../assets/icons/nav-login.svg"



const Sidebar=()=>{
      const { pathname } = useLocation();
      const navLinks =[
        {
            name:"Home",
            icon:NavHome,
            link:"/home"
        },
        {
            name:"Login",
            icon:NavLogin,
            link:'/'
        },
        {
            name:"Movies",
            icon:NavMovies,
            link:"/movies"
        },
        {
            name:"Tv Seies",
            icon:NavTvseries,
            link:"/tv-series"
        },
        {
            name:"Bookmark",
            icon:NavBookmark,
            link:"/bookmarks"
        }
      ]
    return(
        <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={24}
          >
           MovieZone
          </Typography>
        </Hidden>

        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                  ":hover": {
                    color: "blue", 
                  },
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)"
                    }`,
                  }}
                />
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
      
    )

    
}

export default Sidebar;