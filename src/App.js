import Card from './components/Card/Card';
function App() {

  const items = [
    {
      name: "Bella",
      title: "intern",
      comment: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.flexitarian irony, vape marfa unicorn. ",
      profile:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },
    {
      name:"Clark",
      title: "The Boss",
      comment: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
      profile: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    },
    {
      name:"Bill",
      title:"Web Developer",
      comment:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      profile:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
      name:"Anna",
      title:"Web Designer",
      comment:"Helvetica artisan kinfolk thundercats lumber blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      profile: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
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
