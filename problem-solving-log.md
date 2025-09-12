The Time My AI Model Got Inconsistent Results
Date: September 12, 2025

The Challenge I Faced
When I first built my retinal disease detection model, its accuracy was all over the place. It worked well on some diseases but struggled with others. I knew it wasn't good enough for a real-world application, so my goal was to get it to a reliable, clinically viable level.

My Thought Process
I spent a lot of time doing a deep analysis of my initial dataset. What I found was a couple of big issues: first, there was a major data imbalance, with some disease categories having way fewer images than others. Second, a lot of the images were low-quality, which was really throwing the model off.

How I Fixed It
My plan to fix this had a few parts:

I cleaned up the data: I used advanced data augmentation techniques to create more variations of the images. This helped balance out the dataset and gave the model more to learn from.

I brought in the Gemini 1.5 API: This was a total game-changer. I used the API's powerful image analysis capabilities to preprocess and filter my training data, which gave me a high-quality and consistent dataset. This was the biggest reason I was able to get such accurate results.

I used transfer learning: I started with a pre-trained model as a foundation, which is a great trick for a project like this, and then fine-tuned it with my newly cleaned-up dataset.

The Result
I was able to boost the model's accuracy to an amazing 92.37%. The model is now much more reliable. This whole process really showed me how important data quality is for any machine learning project and how using modern tools can completely change the game.
