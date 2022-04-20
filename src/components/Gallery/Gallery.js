import React from "react";

export default function Gallery() {
  const [apartmentsData, setApartmentsData] = React.useState({});

  React.useEffect(function () {
    fetch(
      "https://raw.githubusercontent.com/Dimterion/rental-business-website/master/src/assets/kasa-apartments-data.json"
    )
      .then((res) => res.json())
      .then((data) => setApartmentsData(data));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(apartmentsData, null, 2)}</pre>
    </div>
  );
}
