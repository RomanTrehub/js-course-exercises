describe("Arrays", function() {
  
  describe("hasRepeatingElements", function() {
    
    it("� ������� ��� ������������� ��������� ��������� false", function() {
      assert.isFalse(hasRepeatingElements([1,2,3,4,5,6]));
    });
  
    it("� ������� � ����������� ���������� ��������� true", function() {
      assert.isTrue(hasRepeatingElements([1,1,1,1,1,1]));
    });
    
    it("� ������� � �������������� ���������� � ������ ������� ��������� true", function() {
      assert.isTrue(hasRepeatingElements([1,1,1,4,2]));
    });
    
    it("� ������� � ����������� �������������� ���������� ��������� true", function() {
      assert.isTrue(hasRepeatingElements([1,3,2,4,2]));
    });
  })
  
  describe("negativeElementsSum", function() {
    
    it("������� ����� ���� ������������� ��������� ����� �������� ��������", function() {
      assert.equal(negativeElementsSum([1,2,0,-1,2,-3]), -4);
    });
    
    it("������� ����� ���� ������������� ���������, ���� ������ ������� ������� ����� 0", function() {
      assert.equal(negativeElementsSum([0,1,2,-3,-4]), -7);
    });
    
    it("���������� 0, ���� � ������� ��� ������������� ���������", function() {
      assert.equal(negativeElementsSum([1,2,3,4,5]), 0);
    });
    
    it("���������� ����������� ���� � �������, ����� ������� ��������������", function() {
      assert.equal(negativeElementsSum([0,-2,0,-1,0,-4,-5]), -12);
    });
    
    it("���������� ������������� �������� � ������� ����� 0", function() {
      assert.equal(negativeElementsSum([-1,-2,-3,0,-4,-5]), -9);
    });
  })
  
  describe("commonElements", function() {
    
    it("���� � �������� ��� ���������� ��������� ���������� ������ ������", function() {
      expect(commonElements([1,2,3], ['a','b','c'])).to.be.empty;
    });
    
    it("���������� ������, ���������� ���������� �������� �� ����� �������� ��������", function() {
      expect(commonElements([1,'a',2,3], ['a','b',2,'c'])).to.include.members(['a',2]);
    });
  });
  
  describe("identityMatrix", function() {
    
    it("���� �������� ������ ������� ������ 1 ���������� null", function() {
      assert.isNull(identityMatrix(0));
    });
    
    it("���� �������� ������ ������� ������ 10 ���������� null", function() {
      assert.isNull(identityMatrix(15));
    });
    
    it("���������� ��������� �������", function() {
      var matrix = identityMatrix(4);
      assert.equal(matrix[0].toString(), '1,0,0,0');
      assert.equal(matrix[1].toString(), '0,1,0,0');
      assert.equal(matrix[2].toString(), '0,0,1,0');
      assert.equal(matrix[3].toString(), '0,0,0,1');
    });
  });
});
