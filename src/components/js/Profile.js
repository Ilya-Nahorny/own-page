import React from "react";
import Cube from "./Cube";
import ChartBar from "./ChartBar";
import ChartBarHorizontal from "./ChartBarHorizontal";
import IconChart from "./IconChart";

function Profile(props) {
  const [chartVisibility, setchartVisibility] = React.useState(false);
  const handleChart = () => {
    chartVisibility ? setchartVisibility(false) : setchartVisibility(true);
  };
  /* document.addEventListener('click', (e)=>{
  if(chartVisibility && e.target.className !== "profile_info" && e.target.className !== "profile_info-active"){
    setchartVisibility(!chartVisibility)
  }
}) */
console.log(props)
  return (
    <div className="profile">
      <div onClick={handleChart}>
        <Cube />
      </div>
      <div className="charts">
        <ChartBar visibility={chartVisibility} />
        <ChartBarHorizontal visibility={chartVisibility} />
      </div>
      <h1 className={chartVisibility ? "profile_title" : "profile_title-active"}>{props.profile.title}</h1>
      <article
        className={chartVisibility ? "profile_info" : "profile_info-active"}
      >

        {props.profile.about}
        <div className="icon_chart" onClick={handleChart}>
          <IconChart />
        </div>
      </article>
    </div>
  );
}

export default Profile;
