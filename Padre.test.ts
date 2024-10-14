import { describe, it, expect } from '@jest/globals';
import { Padre } from './Padre'; 

describe('Padre', () => {
    it('deve criar um padre com nome correto', () => {
      const padre = new Padre('João Paulo II');
      expect(padre.nome).toBe('João Paulo II Priest');
    });
    });

    it('deve regenerar sua própria vida', () => {
      const padre = new Padre('João Paulo II');
      const vidaInicial = padre.vidaAtual;
      padre.regenerarVida();
      expect(padre.vidaAtual).toBe(vidaInicial);
    });
  
    it('deve lançar um erro ao tentar aprimorar a habilidade principal', () => {
      const padre = new Padre('João Paulo II');
      expect(() => padre.aprimorarHabilidadePrincipal()).toThrowError('Este personagem não pode executar esta ação');
    });