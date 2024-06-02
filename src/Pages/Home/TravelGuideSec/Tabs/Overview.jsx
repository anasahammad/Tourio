import VideoEmbed from "./VideoEmbed";


const Overview = () => {
    return (
      
        <div className="container mx-auto">
          <div className="my-6">
            
              <h3 className="text-3xl font-bold">Torio. The Bangladesh Travel Guide</h3>
              <hr />
              <div className="flex justify-between gap-4">
                  <div className="mt-12 space-y-4 flex-1 text-justify">
                    <h6><span className="font-semibold">Bangladesh</span> is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer and it is definitely not a tourist haunt like Nepal or India. Bangladesh is like a painter's dream come true with a rich tapestry of colors and texture. The traditional emphasis of the tourist trade has always been on the material facilities offered by a country rather than on its actual charms. This may be a reason why Bangladesh has seldom been highlighted in the World's tourist maps.</h6>

                    <h6><span className="font-semibold">It's a land of enormous beauty</span>, hundreds of serpentine rivers, crystal clear water lakes surrounded by ever green hills, luxuriant tropical rain forests, beautiful cascades of green tea gardens, world's largest mangrove forest preserved as World Heritage, home of the Royal Bengal Tiger and the wild lives, warbling of birds in green trees, wind in the paddy fields, abundance of sunshine, world's longest natural sea beach, rich cultural heritage, relics of ancient Buddhist civilizations and colorful tribal lives, - Bangladesh creates an unforgettable impression of a land of peace.</h6>

                    <h6><spanc className="font-semibold">You'll appreciate our culture and the environment</spanc>, These are not simply sight-seeing excursions, but real-time learning experiences. Enjoy an ideal blend of adventure and exploration with comfort and relaxation. Here you find that you are not alone. With us, any place in Bangladesh is a home away from home.</h6>
                  </div>

                  <div className="flex-1">
                    <h1 className="text-right text-2xl font-bold mb-6">Explore Bangladesh</h1>
<VideoEmbed />
                  </div>
              </div>
          </div>
          
        </div>
    );
};

export default Overview;