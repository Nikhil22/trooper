// import {
//   GraphQLString as StringType,
//   GraphQLNonNull as NonNull,
// } from 'graphql';
// import Event from '../types/UserType';
// import { User } from '../models/user';
// import Event from '../models/event';
//
// const events = {
//   type: EventType,
//   args: {
//     clientEmail: { type: StringType },
//     endDate: { type: new NonNull(StringType) },
//   },
//   resolve({ request, args }) {
//     return request.user && User.update({
//       events: [
//         { clientEmail: args.clientEmail, endDate: args.endDate },
//       ],
//     }, {
//       where: {
//         id: request.user.id,
//       },
//     }, {
//       include: [
//         { model: Event, as: 'events' },
//       ],
//     })
//     .then(() => {
//       return {
//         id: request.user.id,
//       };
//     });
//   },
// };
//
// export default createUserEvent;
