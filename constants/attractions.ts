
import { Attraction } from '../types';
import { images } from '../assets/images';

export const attractions: Attraction[] = [
  {
    slug: 'wise-county-courthouse',
    name: 'Wise County Courthouse',
    description: 'The Wise County Courthouse, located in the heart of Decatur, is a stunning example of French Second Empire architecture. Designed by architect James Riely Gordon, this historic "cathedral of justice" was completed in 1896 and is a centerpiece of the community, known for its distinctive central tower and impressive granite and marble construction.',
    image: images.wiseCountyCourthouse,
    altText: 'The historic Wise County Courthouse in Decatur, TX.'
  },
  {
    slug: 'decatur-town-square',
    name: 'Decatur Town Square',
    description: 'Surrounding the magnificent courthouse, the Decatur Town Square is a vibrant hub of local life. It features a variety of unique shops, antique stores, and local eateries. The square frequently hosts community events, farmers markets, and festivals, making it a gathering place for residents and visitors alike.',
    image: images.decaturTownSquare,
    altText: 'A bustling view of the shops and restaurants on the Decatur Town Square.'
  },
  {
    slug: 'lbj-national-grassland',
    name: 'LBJ National Grassland',
    description: 'Located just north of Decatur, the Lyndon B. Johnson National Grassland covers over 20,000 acres and is a haven for outdoor enthusiasts. It offers opportunities for hiking, horseback riding, fishing, and bird watching. The diverse landscape of prairies and woodlands is home to a rich variety of wildlife.',
    image: images.lbjGrassland,
    altText: 'A scenic prairie landscape at the LBJ National Grassland.'
  },
  {
    slug: 'eagle-mountain-lake',
    name: 'Eagle Mountain Lake',
    description: 'A popular recreational destination in the region, Eagle Mountain Lake is known for its excellent boating, fishing, and water sports opportunities. The lake spans over 8,600 acres and features several parks, marinas, and boat ramps. It\'s a perfect spot for a family day out or a relaxing weekend escape.',
    image: images.eagleMountainLake,
    altText: 'A beautiful sunset over Eagle Mountain Lake with boats in the distance.'
  },
  {
    slug: 'sid-richardson-scout-ranch',
    name: 'Sid Richardson Scout Ranch',
    description: 'Situated on the shores of Lake Bridgeport, the Sid Richardson Scout Ranch is a massive 2,500-acre camp that serves thousands of scouts each year. It offers a wide range of activities, including sailing, climbing, shooting sports, and environmental education, fostering leadership and outdoor skills in a beautiful natural setting.',
    image: images.sidRichardsonRanch,
    altText: 'Scouts participating in an activity at the Sid Richardson Scout Ranch.'
  },
];
