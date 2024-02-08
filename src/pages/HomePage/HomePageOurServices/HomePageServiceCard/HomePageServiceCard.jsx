import c from "./HomePageServiceCard.module.scss";
const HomePageServiceCard = ({ serviceIcon, serviceName, serviceInfo }) => {
  return (
    <div className={c.serviceCard}>
      <div className={c.serviceIcon}>{serviceIcon}</div>
      <div className={c.serviceText}>
        <div className={c.serviceName}>{serviceName}</div>
        <div className={c.serviceInfo}>{serviceInfo}</div>
      </div>
    </div>
  );
};

export default HomePageServiceCard;
