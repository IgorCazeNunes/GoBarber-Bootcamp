interface IMailConfig {
  driver: 'ethereal' | 'ses';

  default: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  default: {
    from: {
      email: 'igorcaze@gmail.com',
      name: 'Igor Cazé Nunes',
    },
  },
} as IMailConfig;
