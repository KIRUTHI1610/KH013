import hashlib
import time
import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase
cred = credentials.Certificate("C:/Users/bsjsh/Downloads/p2p-zhagaram-firebase-adminsdk-9dool-a35c61f981.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://p2p-zhagaram-default-rtdb.firebaseio.com/'})

class Block:
    def _init_(self, index, previous_hash, timestamp, month, unit_consumption, amount, transaction_successful, hash):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = timestamp
        self.month = month
        self.unit_consumption = unit_consumption
        self.amount = amount
        self.transaction_successful = transaction_successful
        self.hash = hash

def calculate_hash(index, previous_hash, timestamp, month, unit_consumption, amount, transaction_successful):
    value = str(index) + str(previous_hash) + str(timestamp) + str(month) + str(unit_consumption) + str(amount) + str(transaction_successful)
    return hashlib.sha256(value.encode()).hexdigest()

def create_genesis_block():
    return Block(0, "0", time.time(), "January", 100, 50.0, True, calculate_hash(0, "0", time.time(), "January", 100, 50.0, True))

def create_new_block(previous_block, month, unit_consumption, amount, transaction_successful):
    index = previous_block.index + 1
    timestamp = time.time()
    hash = calculate_hash(index, previous_block.hash, timestamp, month, unit_consumption, amount, transaction_successful)
    return Block(index, previous_block.hash, timestamp, month, unit_consumption, amount, transaction_successful, hash)

# Create the blockchain and add the genesis block
blockchain = [create_genesis_block()]
previous_block = blockchain[0]

# Add three new blocks to the blockchain
block1 = create_new_block(previous_block, "February", 120, 60.0, True)
blockchain.append(block1)
previous_block = block1

block2 = create_new_block(previous_block, "March", 90, 45.0, True)
blockchain.append(block2)
previous_block = block2

block3 = create_new_block(previous_block, "April", 110, 55.0, True)
blockchain.append(block3)
previous_block = block3

# Display the blockchain and store in Firebase
for block in blockchain:
    print(f"Block #{block.index} | Hash: {block.hash} | Month: {block.month} | Unit Consumption: {block.unit_consumption} | Amount: {block.amount} | Transaction Successful: {block.transaction_successful}")

    # Store the block data in Firebase
    db.reference(f'blocks/{block.index}').set({
        'index': block.index,
        'previous_hash': block.previous_hash,
        'timestamp': block.timestamp,
        'month': block.month,
        'unit_consumption': block.unit_consumption,
        'amount': block.amount,
        'transaction_successful': block.transaction_successful,
        'hash': block.hash
    })
