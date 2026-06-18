losses=[]
for epoch in range(1,6):
    loss=1.0/epoch
    losses.append(loss)
    print(f"epoch {epoch} loss:{loss:3f}")

features=["age","income","education"]
importances=[0.45, 0.32, 0.23]

for i, feat in enumerate(features):

error=1.0
iteration=0

while error>0.01:
    error=error*0.5
    iteration+=1
print(f"converged after {iteration} steps, error={error:4f}")

def calculate_accuracy(correct, total):
    """Return accuracy as a percentage."""
    return (correct/total)*100
result = calculate_accuracy(142,200)
print(f"accuracy: {result:.1f}%")