import spriteSvg from "utilities/sprite/sprite.svg";

import s from "./MainDescription.module.scss";
import List from "Components/List/List";

const MainDescription = ({ data }) => {
  const {
    email,
    number,
    techSkills,
    softSkills,
    languagesSkills,
    linkedin,
    github,
  } = data;

  return (
    <div className={s.main}>
      <div className={s.profileImage}></div>
      <div className={s.description}>
        <div className={s.contacts}>
          <h2>Contacts</h2>
          <ul className={s.list}>
            <li className={s.item}>
              <svg className={s.icon}>
                <use href={`${spriteSvg}#icon_mobile`}></use>
              </svg>
              {<a href={`tel:${number}`}>{number}</a>}
            </li>
            <li className={s.item}>
              <svg className={s.icon}>
                <use href={`${spriteSvg}#icon_form_email`}></use>
              </svg>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li className={s.item}>
              <svg className={`${s.icon} ${s.linkedin}`}>
                <use href={`${spriteSvg}#icon_linkedin`}></use>
              </svg>
              <a href={linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/adriantmocaliuc/
              </a>
            </li>
            <li className={s.item}>
              <svg className={`${s.icon} ${s.github}`}>
                <use href={`${spriteSvg}#icon_github`}></use>
              </svg>
              <a href={github} target="_blank" rel="noreferrer">
                github.com/AdrianTmocaliuc
              </a>
            </li>
          </ul>
        </div>
        <div className={s.techSkills}>
          <h2>Tech Skills</h2>
          <List list={techSkills} />
        </div>
        <div className={s.softSkills}>
          <h2>Soft Skills</h2>
          <List list={softSkills} />
        </div>
        <div className={s.languagesSkills}>
          <h2>Languages Skills</h2>
          <List list={languagesSkills} />
        </div>
      </div>
    </div>
  );
};

export default MainDescription;
