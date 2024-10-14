import { Guerreiro } from './Guerreiro';
import { Util } from './Util';


describe('Guerreiro', () => {
  it('deve atacar o oponente e causar dano', () => {
    const guerreiro = new Guerreiro('Ragnar');
    const oponente = new Guerreiro('Oponente');
    const vidaInicial = oponente.vidaAtual;
    Util.randomizar;
    guerreiro.atacar(oponente);
    expect(oponente.vidaAtual).toBeLessThan(vidaInicial);
  });

  it('deve contra-atacar o oponente', () => {
    const guerreiro = new Guerreiro('Ragnar');
    const oponente = new Guerreiro('Oponente');
    const vidaInicial = oponente.vidaAtual;
    Util.randomizar;
    guerreiro.contraAtacar(oponente);
    expect(oponente.vidaAtual).toBeLessThan(vidaInicial);
  });

  it('deve regenerar sua própria vida', () => {
    const guerreiro = new Guerreiro('Ragnar');
    const vidaInicial = guerreiro.vidaAtual;
    guerreiro.regenerarVida();
    expect(guerreiro.vidaAtual).toBe(vidaInicial);    
  });
});