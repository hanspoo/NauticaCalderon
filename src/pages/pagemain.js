import Footer from "../components/footer";
import Header from "../components/header";
import MainComponent from "../components/maincomponent";
import React from "react";
import main from "../jspelado/main";

function PageMain() {
  React.useEffect(() => {
    main();
  }, []);
  // const [principalPage, setPrincipalPage] = useState(true);

  // const handleClick = () => {
  //   setPrincipalPage(false);
  // };

  // const [detailsPage, setDetailsPage] = useState(false);

  // const mostrarDetalles = () => {
  //   setDetailsPage(true);
  // };

  return (
    <>
      <Header></Header>

      <MainComponent></MainComponent>

      <Footer></Footer>
    </>
  );
}

export default PageMain;
