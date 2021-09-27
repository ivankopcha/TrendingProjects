import styled from "styled-components";

const countDays = (end) => {
  const dateStart = new Date().getTime();
  const dateEnd = Date.parse(end)

  const oneDay = 1000*60*60*24;

  const diffInTime = dateEnd - dateStart;
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}

const SliderItem = ({ title, deadline, comments, description, author, money }) => {
  const daysLeft = countDays(deadline);
  const avatar = author.avatar;
  const authorName = author.name;
  const raised = money.raised;
  const goal = money.goal;
  const completed = (raised / goal) * 100;
  return (
    <ItemWrapper>
      <img
        src="https://fundee.io/images/feed/project_img_placeholder_3.png"
        alt="img"
        className="item-image"
      />
      <div style={{ padding: "1em", fontFamily: "Yaldevi" }}>
        {/* TITLE */}
        <h3 className="item-title">{title}</h3>
        {/* DEADLINE & COMMENTS */}
        <i className="far fa-clock gray-text"></i>
        <label className="gray-text"> {daysLeft} days left</label>
        <i
          className="fas fa-comment gray-text"
          style={{ marginLeft: "1em" }}
        ></i>{" "}
        <label className="gray-text"> {comments.length} comments</label>
        {/* DESCRIPTION */}
        <p className="gray-text" style={{ marginBottom: "2em" }}>
          {description}
        </p>
        {/* AUTHOR */}
        <img src={avatar} alt="" className="author-avatar" />
        <span className="gray-text author-name">{authorName}</span>
      </div>
      {/* MONEY */}
      <div className="money-chart">
        <div className="filled-chart" style={{ width: completed + "%" }}></div>
      </div>
      <div className="raised-info">
        <i className="far fa-money-bill-alt"></i>
        <label style={{ marginLeft: ".8em" }}>
          ${raised}/${goal}
        </label>
        <label style={{ float: "right" }}>{completed}% raised</label>
      </div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  width: 80%;
  display: inline-block;
  text-align: justify;
  border-radius: 10px;
`;

export default SliderItem;
