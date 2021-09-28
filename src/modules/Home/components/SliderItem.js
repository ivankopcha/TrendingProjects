import styled from "styled-components";

const countDays = (end) => {
  const dateStart = new Date().getTime();
  const dateEnd = Date.parse(end);

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = dateEnd - dateStart;
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
};

const SliderItem = ({
  title,
  deadline,
  comments,
  description,
  author,
  money,
}) => {
  const daysLeft = countDays(deadline);
  const avatar = author.avatar;
  const authorName = author.name;
  const raised = money.raised;
  const goal = money.goal;
  const completed = (raised / goal) * 100;
  return (
    <ItemWrapper>
      <ProjectImage
        src="https://fundee.io/images/feed/project_img_placeholder_3.png"
        alt="img"
      />
      <div style={{ padding: "1em", fontFamily: "Yaldevi" }}>
        {/* TITLE */}
        <ProjectTitle>{title}</ProjectTitle>
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
        <AuthorAvatar src={avatar} alt="" />
        <span className="gray-text" style={{marginLeft: '1em'}}>{authorName}</span>
      </div>
      {/* MONEY */}
      <MoneyChart>
        <MoneyFilledChart style={{ width: completed + "%" }}></MoneyFilledChart>
      </MoneyChart>
      <RaisedMoneyWrapper>
        <i className="far fa-money-bill-alt"></i>
        <label style={{ marginLeft: ".8em" }}>
          ${raised}/${goal}
        </label>
        <label style={{ float: "right" }}>{completed}% raised</label>
      </RaisedMoneyWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  width: 80%;
  display: inline-block;
  text-align: justify;
  border-radius: 10px;
`;

const ProjectImage = styled.img`
  width: 100%;
`;
const ProjectTitle = styled.h3`
  float: left;
  margin-top: 0;
  margin-bottom: 0.7em;
  font-weight: 600;
  font-size: 1.4em;
  width: 100%;
  color: #282828;
`;
const AuthorAvatar = styled.img`
  height: 45px;
  border-radius: 100%;
  vertical-align: middle;
`;
const MoneyChart = styled.div`
  width: 90%;
  height: 8px;
  margin: 0 auto;
  background-color: rgba(173, 173, 172, 0.5);
  border-radius: 10px;
  z-index: 1;
`;
const MoneyFilledChart = styled.div`
  height: 8px;
  border-radius: 10px;
  z-index: 2;
  background: rgb(255, 187, 0);
  background: linear-gradient(
    45deg,
    rgba(255, 187, 0, 0.5) 0%,
    rgba(170, 59, 165, 0.5) 65%,
    rgba(29, 15, 242, 0.5) 100%
  );
`;
const RaisedMoneyWrapper = styled.div`
  color: #575757;
  font-family: "Yaldevi";
  padding: 1em;
  font-size: 1em;
`

export default SliderItem;
