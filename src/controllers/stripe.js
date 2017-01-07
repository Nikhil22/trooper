import { stripe } from '../config';
import { User, UserLogin, UserClaim, UserProfile } from '../data/models';

const Stripe = require("stripe")(stripe.credential);

const createStripeAccount = async ({ id }) => {
    let user = await User.findOne({
      where: { id },
      include: [{
          model: UserProfile,
          as: 'profile',
          required: true
      }]
    });

    let stripeAccount = await Stripe.customers.create({
        email: user.email,
        metadata: {
            name: user.profile.displayName
        }
    });

    await User.update(
        {stripe: stripeAccount.id},
        {where: {id: user.id}}
    );

    return;
};
