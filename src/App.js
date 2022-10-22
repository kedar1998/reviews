import Card from './components/Card/Card';
function App() {

  const items = [
    {
      name: "Bella",
      title: "intern",
      comment: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.flexitarian irony, vape marfa unicorn. ",
      profile:"https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name:"Clark",
      title: "The Boss",
      comment: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
      profile: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name:"Bill",
      title:"Web Developer",
      comment:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      profile:"https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name:"Anna",
      title:"Web Designer",
      comment:"Helvetica artisan kinfolk thundercats lumber blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      profile: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]



  return (
    <div className="mt-20">
      <h1 className='mb-14 text-center text-4xl font-bold underline underline-offset-4 decoration-blue-400 decoration-2'>Our Reviews</h1>
      <Card items={items}/>
    </div>
  );
}

export default App;
