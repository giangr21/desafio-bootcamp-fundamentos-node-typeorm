import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const findRepository = await transactionsRepository.findOne({ id });
    if (!findRepository) {
      throw new AppError('Transaction ID does not exist', 404);
    }
    await transactionsRepository.delete({ id });
  }
}

export default DeleteTransactionService;
