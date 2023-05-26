const DeedzCoin = artifacts.require('DeedzCoin');

contract('DeedzCoin', (accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];

  let deedzCoin;

  before(async () => {
    deedzCoin = await DeedzCoin.new(owner);
  });

  it('should have correct initial supply', async () => {
    const totalSupply = await deedzCoin.totalSupply();
    assert.equal(totalSupply, '500000000000000000000000000');
  });

  it('should transfer tokens successfully', async () => {
    const amount = web3.utils.toWei('100', 'ether');
    await deedzCoin.transfer(user1, amount, { from: owner });

    const balance = await deedzCoin.balanceOf(user1);
    assert.equal(balance, amount);
  });

  it('should lock tokens successfully', async () => {
    const reason = web3.utils.fromAscii('Lock reason');
    const amount = web3.utils.toWei('50', 'ether');
    const time = 3600; // 1 hour

    await deedzCoin.lock(reason, amount, time, { from: user1 });

    const lockedAmount = await deedzCoin.tokensLocked(user1, reason);
    assert.equal(lockedAmount, amount);
  });

  it('should not allow locking already locked tokens', async () => {
    const reason = web3.utils.fromAscii('Lock reason');
    const amount = web3.utils.toWei('50', 'ether');
    const time = 3600; // 1 hour

    try {
      await deedzCoin.lock(reason, amount, time, { from: user1 });
      assert.fail('Exception not thrown');
    } catch (error) {
      assert(error.message.includes('Tokens already locked'), 'Unexpected error message');
    }
  });

  it('should unlock tokens successfully', async () => {
    const reason = web3.utils.fromAscii('Lock reason');

    await deedzCoin.unlock(user1, { from: user1 });

    const unlockedAmount = await deedzCoin.tokensUnlockable(user1, reason);
    assert.equal(unlockedAmount, 0);
  });

  it('should extend lock duration successfully', async () => {
    const reason = web3.utils.fromAscii('Lock reason');
    const time = 3600; // 1 hour

    await deedzCoin.extendLock(reason, time, { from: user1 });

    // Check if lock duration has been extended
    // ... (assertion code)
  });

  // Add more test cases as needed

});
