export default function DisplayAddedItemTypes() {
  // will be received through a http get request
  const itemTypeList = ["donburi", "drinks", "dessert"];

  const tags = itemTypeList.map((itemType: string) => {
    return <div>{itemType}</div>;
  });

  return (
    <div>
      <h1>Added Item Types</h1>
      <div>{tags}</div>
    </div>
  );
}
