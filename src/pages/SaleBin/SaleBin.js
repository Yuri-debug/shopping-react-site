import { Content, Footer, FooterBottom, Header } from "../../components";

import { useEffect, useState } from "react";

function SaleBin() {
  const [sum, setSum] = useState(Number(localStorage.getItem("sum")) || 0);
  const [isClicked, setClick] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setSum(0);
    }
    setClick(false);
  }, [isClicked]);

  useEffect(() => {
    localStorage.setItem("sum", sum);
  }, [sum]);

  return (
    <div>
      <Header sum={sum} setClick={setClick} />
      <Content />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default SaleBin;
