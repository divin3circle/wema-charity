import Items from "./Items"
import { EVENTS, PARTNERS, TEAM, CAUSES } from "./Menu";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Items Links={EVENTS} title="EVENTS" />
      <Items Links={PARTNERS} title="PARTNERS" />
      <Items Links={TEAM} title="TEAM" />
      <Items Links={CAUSES} title="CAUSES" />
    </div>
  );
}

export default ItemsContainer