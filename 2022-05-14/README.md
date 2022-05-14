# TIL 2022-05-14

## TIL 학습/복습 내용

<br>

### 진행 목록

- Axios API
- 자료구조
- 리액트 라이프사이클 훅
- 알고리즘
- 파이썬 기초



#### 자료구조

> 자료구조, 데이터 구조, data structure

- 데이터를 효율적으로 관리할 수 있는 데이터의 구조
- 코드상에서 데이터를 효율적으로 처리하기 위해 체계적으로 구조화한 것
- 어떤 데이터 구조를 사용하냐에 따라 코드의 효율이 달라진다

    배열, 스택, 큐, 링크드 리스트, 해쉬 테이블, 힙 등

<br>




#### 알고리즘

> 알고리즘, algorithm

- 문제를 풀기 위한 절차/방법
- 문제에 특정 '입력'을 넣으면 원하는 '출력'을 얻을 수 있도록 프로그래밍 하는 것


#### 배열

- 데이터 나열 후 인덱스에 데이터를 대응하도록 구성한 구조
- 같은 종류의 데이터를 순차적/효율적으로 관리하기 위한 것
- 데이터 주소(인덱스)만 알면 해당 데이터를 바로 가져올 수 있어 쉽고 빠르다!!
- 파이썬에서는 리스트 타입이 배열 기능 제공


- 장/단점

> 장점: 빠른 접근성
> 단점: 미리 최대 길이를 지정해야 함. -> 공간이 이미 정해지기 때문에 데이터가 가변적이라면... 추가/삭제가 어려워진다


#### 파이썬 리스트 활용

```python
# 1차원 배열: 리스트로 구현시
data = [1,2,3,4,5]
print(data)

## 결과 -> [1,2,3,4,5]


# 2차원 배열: 리스트로 구현시
data=[[1,2,3],[4,5,6],[7,8,9]]
print(data[0])

## 결과 -> [1,2,3]

print(data[0][0])

## 결과 -> 1


```




```python
# dataset안에 있는 값 중 'M'이 있으면 count하기
m_count =0
for data in dataset:
    for index in range(len(data)):
        print(data[index]) == 'M':
        m_count += 1
print(m_count)

```



#### 큐(Queue)

- 가장 먼저 넣은 데이터를 가장 먼저 꺼내는 구조
- FIFO(First-In, First-Out), LILO(Last-in, Last-Out)방식
- 스택과 꺼내는 순서가 반대
- 멀티 태스킹을 위한 프로세스 스케줄링 방식을 구현하기 위해 많이 사용(OS)
- 파이썬에서는 queue라이브러리 활용하면 쉽게 사용 가능


> Enqueue: 큐에 데이터를 넣는 기능
> Dequeue: 큐에서 데이터를 꺼내는 기능


```python
# FIFO queue
# 가장 먼저 넣은 것 -> 가장 먼저 나오는 것
import queue

# queue 라이브러리 불러오고 안에 있는 Queue 클래스 사용하기
data_queue = queue.Queue()

# put()써서 데이터 넣기
data_queue.put(3)
data_queue.put('string')

# qsize()로 데이터 길이 확인 
data_queue.qsize()
# -> 2 

# get()써서 데이터 꺼내기
data_queue.get()
# 가장 먼저 들어갔던 것을 꺼내기 때문에 함수 실행에 인자 필요 없음
# -> 3

# get()으로 데이터 1개 꺼내고 데이터 길이 확인 
data_queue.qsize()
# -> 1 

data_queue.get()
# -> 'string'

data_queue.qsize()
# -> 0 
```

```python
# LIFO queue
# 마지막에 넣은것 -> 가장 먼저 나오는 것
import queue

# queue 라이브러리 불러오고 안에 있는 LifoQueue 클래스 사용하기
data_queue = queue.LifoQueue()


# put()써서 데이터 넣기
data_queue.put(3)
data_queue.put('string')

# qsize()로 데이터 길이 확인 
data_queue.qsize()
# -> 2 

# get()써서 데이터 꺼내기
data_queue.get()
# 가장 마지막인 것을 꺼내기 때문에 함수 실행에 인자 필요 없음
# -> 'string'

# get()으로 데이터 1개 꺼내고 데이터 길이 확인 
data_queue.qsize()
# -> 1 

data_queue.get()
# -> 3

data_queue.qsize()
# -> 0 

```

```python
# PriorityQueue
# 데이터 넣을 때 우선순위도 함께 넣음
# 우선순위가 높은 것이 가장 먼저 나옴
import queue

# queue 라이브러리 불러오고 안에 있는 PriorityQueue 클래스 사용하기
data_queue = queue.PriorityQueue()

# put()써서 데이터 넣기
# (우선순위, 데이터)
data_queue.put((10, 3))
data_queue.put((5, 'string'))
data_queue.put((15, 1))

# qsize()로 데이터 길이 확인 
data_queue.qsize()
# -> 3 

# get()써서 데이터 꺼내기
# 순위숫자가 작을수록 우선순위가 높은 것을 의미
data_queue.get()
# -> (5, 'string')

data_queue.get()
# -> (10, 3)

```



> 참고자료

[자료구조 원리/이해](https://visualgo.net/en/list?slide=1)
