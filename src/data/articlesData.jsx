import blog from "../img/blog-image.webp"
import blog2 from "../img/blog2.webp"
import blog3 from "../img/blog3.webp"
import blog4 from "../img/blog4.webp"
import cook from "../img/cook.webp"
import cook1 from "../img/cook1.webp"
import React from 'react';

export const articlesData = [
  {
    id: 1,
    title: "Sweet Traditions",
    excerpt: "Sweet traditional that continue to inspire our modern bakery creations",
    date: "May 15, 2024",
    image: blog,
    cookImage: cook,
    cookImageFinal: cook1,
    content: {
      title: <>Sweet traditions that continue to <br /> inspire our modern bakery creations</>,
      fullText: "Our bakery was built on time-honored recipes, but our creativity keeps them alive in new ways. We blend classic baking methods with fresh treats that feel familiar yet exciting. Every bite carries a piece of tradition & a spark of innovation a sweet reminder that the best flavors are born from both heritage & heart.",
      subheading: "Wholesome goodness, freshly made daily",
      detailList: [
        "Every loaf, pastry, and cake baked fresh with passion.",
        "Your daily dose of sweetness, freshly baked with love.",
        "Simple ingredients, magical flavors, baked to perfection daily.",
        "Turning everyday moments into memories with our fresh bakes.",
        "From classic recipes to modern treats, always baked fresh",
        "Celebrating life sweetest moments with our oven-fresh creations."
      ],
      cookingText: "Baking isn't just our craft, it's our love language every loaf, pastry, and cake tells a story of warmth, care, and joy. From the first whiff of fresh bread to the last crumb of cake, we believe every bite should bring comfort and happiness.",
      secondaryText: "Our bakery is more than just a place to buy bread and pastries it’s where passion meets tradition, and every creation is crafted to spread joy. We start each day early, mixing, kneading, and baking with care to bring you the freshest loaves, pastries, cakes, and treats.",
      secondarySubheading: "Crafting treats that warm hearts and brighten days",
      secondaryDesc: "Every product is made from quality ingredients and baked in small batches to ensure flavor, freshness, and authenticity. But our work goes beyond baking. We aim to create an experience the smell of fresh bread, the warmth of a friendly smile, and the happiness of sharing sweet moments with loved ones",
      secondaryList: [
        "Freshly baked treats made daily with love and care.",
        "Where quality ingredients create unforgettable flavors every day.",
        "From our oven to your table, always baked fresh.",
        "Crafting breads, pastries, and cakes to brighten your day.",
        "Wholesome flavors, fresh creations, and happiness in every bite."
      ],
      lastBlocks: [
        {
          heading: "Fresh ingredients blended into flavors you'll love",
          para: "From everyday indulgences to custom creations for life's biggest celebrations, our bakery is dedicated to making your days a little more special, one bite at a time. Each creation is thoughtfully prepared, not just to satisfy cravings, but to make your moments more memorable & your days a little sweeter."
        },
        {
          heading: "Bringing fresh bakes and happiness to every table",
          para: "We blend traditional baking methods with a touch of creativity to bring you everything from classic breads and buttery pastries to custom cakes and festive treats."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Art of Sourdough",
    excerpt: "From oven to table fresh treats crafted with love and care",
    date: "May 18, 2024",
    image: blog2,
    cookImage: cook,
    cookImageFinal: cook1,
    content: {
      fullText: "Sourdough is a labor of love. It requires patience, understanding, and a bit of magic from the air around us. Our journey into sourdough started years ago, and we've been perfecting it ever since.",
      subheading: "Simple Ingredients, Complex Flavors",
      detailList: [
        "The importance of a healthy starter.",
        "Understanding hydration levels.",
        "The secret to a crispy, golden crust.",
        "Patience is the key ingredient."
      ],
      cookingText: "Nothing beats the smell of fresh sourdough coming out of the oven. It's a smell that warms the soul.",
      secondaryText: "We use organic flour and filtered water to ensure the purest flavors in our bread.",
      secondarySubheading: "Healthy and Delicious",
      secondaryDesc: "Sourdough is not just tasty; it's also better for digestion. We're proud to bring this ancient tradition to your table.",
      secondaryList: [
        "Long fermentation for better flavor.",
        "Hand-shaped loaves for a personal touch.",
        "Baked in stone ovens for that authentic crust.",
        "Fresh from our bakery to your home."
      ],
      lastBlocks: [
        {
          heading: "Sustainable Baking",
          para: "We're committed to sustainable practices, from sourcing local ingredients to reducing waste in our kitchen."
        }
      ]
    }
  },
  {
    id: 3,
    title: "Mastering Whisk",
    excerpt: "Join chef Alex as he breaks down the fundamental techniques of creating flawless sponge cakes.",
    date: "May 20, 2024",
    image: blog3,
    cookImage: cook,
    cookImageFinal: cook1,
    content: {
      title: <>Mastering the Whisk: <br /> Flawless Sponge Cakes</>,
      fullText: "Join chef Alex as he breaks down the fundamental techniques of creating flawless sponge cakes. From the perfect whisk to the softest crumb, learn the secrets of a master baker.",
      subheading: "Technique and Tradition",
      detailList: [
        "Mastering the art of the perfect whisk.",
        "Creating a soft and airy sponge every time.",
        "The importance of ingredient temperature.",
        "Balancing flavors for a sophisticated palate."
      ],
      cookingText: "Baking is a science perfectly executed with art. Every measurement, every motion counts toward the final masterpiece.",
      secondaryText: "Alex's studio is a place of learning and passion. We welcome all who wish to master the craft of baking.",
      secondarySubheading: "The Journey of a Baker",
      secondaryDesc: "Every baker starts with a single whisk and a dream. We are here to help you achieve yours.",
      secondaryList: [
        "Hands-on training with professional chefs.",
        "Premium ingredients for all workshop participants.",
        "Learn techniques passed down through generations.",
        "Personalized feedback on your creations."
      ],
      lastBlocks: [
        {
          heading: "Our Commitment to Quality",
          para: "We believe in using only the finest ingredients to create unforgettable experiences."
        }
      ]
    }
  },
  {
    id: 4,
    title: "Gourmet Cupcakes",
    excerpt: "Discover the secrets behind our gourmet cupcakes and their vibrant decorations.",
    date: "May 25, 2024",
    image: blog4,
    cookImage: cook,
    cookImageFinal: cook1,
    content: {
      title: <>Gourmet Cupcakes: <br /> Small Bites, Big Flavors</>,
      fullText: "Our cupcakes are more than just cake; they're tiny canvases for our creativity. Using vibrant colors and unique flavor combinations, we make sure every cupcake is a work of art.",
      subheading: "Flavorful and Fun",
      detailList: [
        "Using fresh fruits for natural flavors.",
        "The secret to smooth and creamy frosting.",
        "Decorative techniques for any occasion.",
        "Pairing cupcakes with the perfect drink."
      ],
      cookingText: "Every cupcake is piped by hand with love, ensuring that no two are exactly alike.",
      secondaryText: "We offer a wide range of flavors, from classic vanilla to exotic passion fruit.",
      secondarySubheading: "A Treat for Everyone",
      secondaryDesc: "Whether you're celebrating a birthday or just want a mid-day treat, our cupcakes are the perfect choice.",
      secondaryList: [
        "Custom orders for special events.",
        "Daily rotating flavors in our bakery.",
        "Gift boxes available for sweet surprises.",
        "Made with all-natural ingredients."
      ],
      lastBlocks: [
        {
          heading: "Spread the Joy",
          para: "There's nothing like a cupcake to put a smile on someone's face. Share the sweetness today!"
        }
      ]
    }
  }
];
