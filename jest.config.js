module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,  // Adicione esta linha
  coverageDirectory: 'coverage',  // Diretório onde o relatório de cobertura será gerado
  coverageReporters: ['json', 'lcov', 'text', 'clover'],  // Relatórios de cobertura
};

  