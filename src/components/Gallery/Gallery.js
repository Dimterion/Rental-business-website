import React from "react";

export default function Gallery() {
  const [apartmentsData, setApartmentsData] = React.useState({});

  React.useEffect(function () {
    fetch(
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/data.json"
    )
      .then((res) => res.json())
      .then((data) => setApartmentsData(data));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(apartmentsData, null, 2)}</pre>
    </div>
  )
}
