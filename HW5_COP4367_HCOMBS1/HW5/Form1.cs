using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Xml;



namespace HW5
{
    public enum GameLevel
    {
        SIMPLE,
        MEDIUM,
        COMPLEX        
    }



    public partial class Form1 : Form
    {


        private int counter = 0;
        static bool endtime = false;
      
        private int[,]  StartingAnswer = {{7,9,2,3,5,1,8,4,6},
									 {4,6,8,9,2,7,5,1,3},
									 {1,3,5,6,8,4,7,9,2},
									 {6,2,1,5,7,9,4,3,8},
									 {5,8,3,2,4,6,1,7,9},
									 {9,7,4,8,1,3,2,6,5},
									 {8,1,6,4,9,2,3,5,7},
									 {3,5,7,1,6,8,9,2,4},
									 {2,4,9,7,3,5,6,8,1}
									};



        public Form1()
        {
            InitializeComponent();
            this.BackColor = Color.LightGreen;
            SetUpDataGridView();
            Display(StartingAnswer, 1);
            AnswerStatus.Visible = false;
            lblstatus.Visible = false;
            lblstatus.Text = "";
            dataGridView1.Visible = false;
            button3.Visible = false;
            button5.Visible = false;
            button6.Visible = false;
            button7.Visible = false;
            button8.Visible = false;
            Difficulty_Label.Visible = false;
            this.dataGridView1.Paint += new System.Windows.Forms.PaintEventHandler(this.DataGrid1_Paint);
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        //formats the display for the sudoku puzzle
        private void SetUpDataGridView()
        {
            dataGridView1.ColumnCount = 9;
            DataGridViewColumn column1 = dataGridView1.Columns[0];
            column1.Width = 30;
            DataGridViewColumn column2 = dataGridView1.Columns[1];
            column2.Width = 30;
            DataGridViewColumn column3 = dataGridView1.Columns[2];
            column3.Width = 30;
            DataGridViewColumn column4 = dataGridView1.Columns[3];
            column4.Width = 30;
            DataGridViewColumn column5 = dataGridView1.Columns[4];
            column5.Width = 30;
            DataGridViewColumn column6 = dataGridView1.Columns[5];
            column6.Width = 30;
            DataGridViewColumn column7 = dataGridView1.Columns[6];
            column7.Width = 30;
            DataGridViewColumn column8 = dataGridView1.Columns[7];
            column8.Width = 30;
            DataGridViewColumn column9 = dataGridView1.Columns[8];
            column9.Width = 30;
            dataGridView1.Size = new Size(274, 274);

            dataGridView1.GridColor = Color.SkyBlue;
            dataGridView1.BackgroundColor = Color.SkyBlue;
        }

        //timer progress displayed at screen bottom
        private void timer()
        {
            Timer timer = new System.Windows.Forms.Timer();

            if (endtime == false)
            {
                timer.Tick += new EventHandler(label1_Click);
                timer.Interval = (1000) * (1);
                timer.Enabled = true;
                timer.Start();
            }
            else if (endtime == true)
            {
                timer.Stop();
            }

        }
        private void label1_Click(object sender, EventArgs e)
        {
            if (endtime == false)
            {
                counter++;
                lblstatus.Text = counter.ToString();
            }
            else if (endtime == true)
            {
                counter = 0;
                lblstatus.Text = counter.ToString();
            }
        }

        //button options for the game
        private void NewGame_Click(object sender, EventArgs e)
        {
            Difficulty_Label.Visible = true;
            button5.Visible = true;
            button6.Visible = true;
            button7.Visible = true;
            dataGridView1.Visible = false;
            Anslabel1.Text = "";

        }     
       
        private void Save_Game(object sender, EventArgs e)
        {
            int stoptime = counter;
            endtime = true;
            dataGridView1.Visible = false;
            button8.Visible = false;
            Anslabel1.Text = "Game Saved";
            button1.Visible = true;
            button3.Visible = false;
            button2.Visible = true;

            int[,] save = new int[9,9];
          

            for (int row = 0; row < 9; row++)
            {
                for (int col = 0; col < 9; col++)
                {
                    if (dataGridView1.Rows[row].Cells[col].Value != null)
                    {
                        save[row,col] = Convert.ToInt32(dataGridView1.Rows[row].Cells[col].Value);
                    }
                    else if (dataGridView1.Rows[row].Cells[col].Value == null)
                    {
                        save[row,col] = 0;
                    }

                }
            }

            System.IO.StreamWriter file1 = new System.IO.StreamWriter("timer.txt");
            file1.WriteLine(stoptime);
            file1.Close();


            using (StreamWriter outfile = new StreamWriter("answer.txt"))
            {
                for (int x = 0; x < 9; x++)
                {
                    string content = "";
                    for (int y = 0; y < 9; y++)
                    {
                        content += save[x, y].ToString("0") + " ";
                    }
                    outfile.WriteLine(content);
                }
            }


        }

        private void LoadGame_Click(object sender, EventArgs e)
        {
            string timeholder;
            int currTime;
            System.IO.StreamReader timefield = new System.IO.StreamReader("timer.txt");
            timeholder= timefield.ReadLine();
            timefield.Close();

            currTime = Convert.ToInt32(timeholder);
            counter = currTime;

            String[][] input = File.ReadLines("answer.txt").Select(s=>s.Split(' ')).ToArray();


           

            int[,] result = new int[9, 9];

            for(int i=0; i<9;i++)
            {
                for (int j = 0; j < 9; j++)
                {
                    
                   result[i, j] = Convert.ToInt32(input[i][j]);
                   
                }

            }
          

          


            for (int rowIndex = 0; rowIndex < 9; ++rowIndex)
            {
                for (int columnIndex = 0; columnIndex < 9; ++columnIndex)
                {
                    if(result[rowIndex,columnIndex] !=0)
                    {
                        dataGridView1.Rows[rowIndex].Cells[columnIndex].Value = result[rowIndex, columnIndex];                  
                    }
                    else if(result[rowIndex,columnIndex] ==0)
                    {
                         dataGridView1.Rows[rowIndex].Cells[columnIndex].Value = null;
                         dataGridView1.Rows[rowIndex].Cells[columnIndex].Style.BackColor=Color.PowderBlue;
                    }

                }

                
            }


            endtime = false;
            dataGridView1.Visible = true;
            button1.Visible = false;
            button3.Visible = true;
            button8.Visible = true;
            Anslabel1.Text = "Game Loaded";
        }

        private void Quit_Game(object sender, EventArgs e)
        {
            this.Close();
        }


        //diffculty selections
        private void Easy_Click(object sender, EventArgs e)
        {
            endtime = false;
            timer();
            NewGame(0);
            diffculty_Click(sender, e);

        }
        private void Medium_Click(object sender, EventArgs e)
        {
            endtime = false;
            timer();
            NewGame(1);
            diffculty_Click(sender, e);
        }
        private void Hard_Click(object sender, EventArgs e)
        {
            endtime = false;
            timer();            
            NewGame(2);
            diffculty_Click(sender, e);
        }
       
        
        //display answer if user no longer wants to solve puzzle
        private void GiveUp_Click(object sender, EventArgs e)
        {
            button8.Visible = false;
            button1.Visible = true;
            button3.Visible = false;
            button2.Visible = true;
            endtime = true;
            Unmasked_Answers();

        }


        //Sets the color for button on mouse hover and leave
        private void button1_hover(object sender, EventArgs e)
        {
            button1.BackColor = Color.Aqua;
        }
        private void button3_hover(object sender, EventArgs e)
        {
            button3.BackColor = Color.Aqua;
        }
        private void button_leave(object sender, EventArgs e)
        {
            button3.BackColor = Color.SkyBlue;
        }
        private void button1_leave(object sender, EventArgs e)
        {
            button1.BackColor = Color.SkyBlue;
        }
        private void button2_hover(object sender, EventArgs e)
        {
            button2.BackColor = Color.Aqua;
        }
        private void button2_leave(object sender, EventArgs e)
        {
            button2.BackColor = Color.SkyBlue;
        }
        private void button4_hover(object sender, EventArgs e)
        {
            button4.BackColor = Color.Aqua;
        }
        private void button4_leave(object sender, EventArgs e)
        {
            button4.BackColor = Color.SkyBlue;
        }
        private void button8_hover(object sender, EventArgs e)
        {
            button8.BackColor = Color.Aqua;
        }
        private void button8_leave(object sender, EventArgs e)
        {
            button8.BackColor = Color.SkyBlue;
        }
        private void button5_hover(object sender, EventArgs e)
        {
            button5.BackColor = Color.Aqua;
        }
        private void button5_leave(object sender, EventArgs e)
        {
            button5.BackColor = Color.SkyBlue;
        }
        private void button6_hover(object sender, EventArgs e)
        {
            button6.BackColor = Color.Aqua;
        }
        private void button6_leave(object sender, EventArgs e)
        {
            button6.BackColor = Color.SkyBlue;
        }
        private void button7_hover(object sender, EventArgs e)
        {
            button7.BackColor = Color.Aqua;
        }
        private void button7_leave(object sender, EventArgs e)
        {
            button7.BackColor = Color.SkyBlue;
        }


        //sets buttons and grid visible for start of game
        private void diffculty_Click(object sender, EventArgs e)
        {

            button2.Visible = false;
            button3.Visible = true;
            button5.Visible = false;
            button6.Visible = false;
            button7.Visible = false;
            button8.Visible = true;
            button1.Visible = false;
            Difficulty_Label.Visible = false;
            dataGridView1.Visible = true;
            lblstatus.Visible = true;
        }

        //shows gameboard
        private void Display(int[,] solution, int difficulty)
        {
            var rowCount = 9;
            var rowLength = 9;

            for (int rowIndex = 0; rowIndex < rowCount; ++rowIndex)
            {
                var row = new DataGridViewRow();
                row.Height = 30;
                for (int columnIndex = 0; columnIndex < rowLength; ++columnIndex)
                {
                   
                   
                        row.Cells.Add(new DataGridViewTextBoxCell()
                        {
                            Value = solution[rowIndex, columnIndex]
                        });
                   
                  
                }

                dataGridView1.Rows.Add(row);


            }
        }
               
        //Start game based on difficulty
        private void NewGame(int index)
        {
            GameLevel[] levels = { GameLevel.SIMPLE, GameLevel.MEDIUM, GameLevel.COMPLEX };

            if (index == 0)
            {
                Mask_Answers(0);
                dataGridView1.Visible = true;
            }
            else if (index == 1)
            {
                Mask_Answers(1);
                dataGridView1.Visible = true;
            }
            else if (index == 2)
            {
                Mask_Answers(2);
                dataGridView1.Visible = true;
            }
        }

        //blanks squares on the board
        private void Mask_Answers(int level)
        {
            Unmasked_Answers();
            
            
            if (level == 0)
            {
                dataGridView1.Rows[0].Cells[0].Value = null;
                dataGridView1.Rows[0].Cells[0].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[0].Cells[1].Value = null;
                dataGridView1.Rows[0].Cells[1].Style.BackColor = Color.PowderBlue;
                
                dataGridView1.Rows[1].Cells[1].Value = null;
                dataGridView1.Rows[1].Cells[1].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[1].Cells[4].Value = null;
                dataGridView1.Rows[1].Cells[4].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[2].Cells[4].Value = null;
                dataGridView1.Rows[2].Cells[4].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[1].Cells[7].Value = null;
                dataGridView1.Rows[1].Cells[7].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[2].Cells[7].Value = null;
                dataGridView1.Rows[2].Cells[7].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[7].Cells[7].Value = null;
                dataGridView1.Rows[7].Cells[7].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[8].Cells[7].Value = null;
                dataGridView1.Rows[8].Cells[7].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[5].Cells[4].Value = null;
                dataGridView1.Rows[5].Cells[4].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[6].Cells[4].Value = null;
                dataGridView1.Rows[6].Cells[4].Style.BackColor = Color.PowderBlue;


                dataGridView1.Rows[3].Cells[1].Value = null;
                dataGridView1.Rows[3].Cells[1].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[4].Cells[1].Value = null;
                dataGridView1.Rows[4].Cells[1].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[7].Cells[1].Value = null;
                dataGridView1.Rows[7].Cells[1].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[8].Cells[1].Value = null;
                dataGridView1.Rows[8].Cells[1].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[8].Cells[2].Value = null;
                dataGridView1.Rows[8].Cells[2].Style.BackColor = Color.PowderBlue;

                
               
            }
            else if (level == 1)
            {
                dataGridView1.Rows[4].Cells[1].Value = null;
                dataGridView1.Rows[4].Cells[1].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[5].Cells[1].Value = null;
                dataGridView1.Rows[5].Cells[1].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[4].Cells[4].Value = null;
                dataGridView1.Rows[4].Cells[4].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[5].Cells[4].Value = null;
                dataGridView1.Rows[5].Cells[4].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[1].Cells[7].Value = null;
                dataGridView1.Rows[1].Cells[7].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[2].Cells[7].Value = null;
                dataGridView1.Rows[2].Cells[7].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[8].Cells[1].Value = null;
                dataGridView1.Rows[8].Cells[1].Style.BackColor = Color.PowderBlue;
                
                for (int grid1 = 0; grid1 < 3; grid1++)
                {
                        dataGridView1.Rows[0].Cells[grid1].Value = null;
                        dataGridView1.Rows[0].Cells[grid1].Style.BackColor = Color.PowderBlue;
                        dataGridView1.Rows[1].Cells[grid1].Value = null;
                        dataGridView1.Rows[1].Cells[grid1].Style.BackColor = Color.PowderBlue;
                        dataGridView1.Rows[2].Cells[grid1].Value = null;
                        dataGridView1.Rows[2].Cells[grid1].Style.BackColor = Color.PowderBlue;
                        
                        dataGridView1.Rows[6].Cells[8-grid1].Value = null;
                        dataGridView1.Rows[6].Cells[8-grid1].Style.BackColor = Color.PowderBlue;
                        dataGridView1.Rows[7].Cells[8-grid1].Value = null;
                        dataGridView1.Rows[7].Cells[8-grid1].Style.BackColor = Color.PowderBlue;
                        dataGridView1.Rows[8].Cells[8-grid1].Value = null;
                        dataGridView1.Rows[8].Cells[8-grid1].Style.BackColor = Color.PowderBlue;
                }
            }

            else if (level == 2)
            {
                dataGridView1.Rows[4].Cells[1].Value = null;
                dataGridView1.Rows[4].Cells[1].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[5].Cells[1].Value = null;
                dataGridView1.Rows[5].Cells[1].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[1].Cells[7].Value = null;
                dataGridView1.Rows[1].Cells[7].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[2].Cells[7].Value = null;
                dataGridView1.Rows[2].Cells[7].Style.BackColor = Color.PowderBlue;

                dataGridView1.Rows[7].Cells[1].Value = null;
                dataGridView1.Rows[7].Cells[1].Style.BackColor = Color.PowderBlue;
                dataGridView1.Rows[8].Cells[1].Value = null;
                dataGridView1.Rows[8].Cells[1].Style.BackColor = Color.PowderBlue;
                

                for (int grid1 = 0; grid1 < 3; grid1++)
                {
                    dataGridView1.Rows[0].Cells[grid1].Value = null;
                    dataGridView1.Rows[0].Cells[grid1].Style.BackColor = Color.PowderBlue;
                    dataGridView1.Rows[1].Cells[grid1].Value = null;
                    dataGridView1.Rows[1].Cells[grid1].Style.BackColor = Color.PowderBlue;
                    dataGridView1.Rows[2].Cells[grid1].Value = null;
                    dataGridView1.Rows[2].Cells[grid1].Style.BackColor = Color.PowderBlue;

                    dataGridView1.Rows[3].Cells[5-grid1].Value = null;
                    dataGridView1.Rows[3].Cells[5 - grid1].Style.BackColor = Color.PowderBlue;
                    dataGridView1.Rows[4].Cells[5 - grid1].Value = null;
                    dataGridView1.Rows[4].Cells[5 - grid1].Style.BackColor = Color.PowderBlue;
                    dataGridView1.Rows[5].Cells[5 - grid1].Value = null;
                    dataGridView1.Rows[5].Cells[5 - grid1].Style.BackColor = Color.PowderBlue;
                    
                    
                    
                    dataGridView1.Rows[6].Cells[8 - grid1].Value = null;
                    dataGridView1.Rows[6].Cells[8 - grid1].Style.BackColor = Color.PowderBlue;
                    dataGridView1.Rows[7].Cells[8 - grid1].Value = null;
                    dataGridView1.Rows[7].Cells[8 - grid1].Style.BackColor = Color.PowderBlue;
                    dataGridView1.Rows[8].Cells[8 - grid1].Value = null;
                    dataGridView1.Rows[8].Cells[8 - grid1].Style.BackColor = Color.PowderBlue;
                }



            }



        }

        //displays solution if user presses I give up
        private void Unmasked_Answers()
        {
            for (int i = 0; i < 9; i++)
            {
                for (int j = 0; j < 9; j++)
                {
                    dataGridView1.Rows[i].Cells[j].Value = StartingAnswer[i, j];
                    dataGridView1.Rows[i].Cells[j].Style.BackColor = Color.White;
                }
            }
        }
        
        //prevents users from editing displayed values
        private void dataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            dataGridView1.Rows[e.RowIndex].ReadOnly = true;
            if (dataGridView1.Rows[e.RowIndex].Cells[e.ColumnIndex].Value == null)
            {
                dataGridView1.Rows[e.RowIndex].ReadOnly = false;
            }
        }
        
        //checks if user entered value is correct
        private void dataGridView1_CellValidating(object sender, DataGridViewCellValidatingEventArgs e)
        {


            if (string.IsNullOrEmpty(e.FormattedValue.ToString()))
            {
              
            }
            else
            {

                string potentialAnswer = e.FormattedValue.ToString();
                int val = Convert.ToInt32(potentialAnswer);

                if (val == StartingAnswer[e.RowIndex, e.ColumnIndex])
                {
                    Anslabel1.Text = "Correct!";
                    dataGridView1.Rows[e.RowIndex].Cells[e.ColumnIndex].Style.BackColor = Color.White;

                }
                else
                    dataGridView1.Rows[e.RowIndex].Cells[e.ColumnIndex].Value= null;
                   
            } 
            
            
        }

        private void DataGrid1_Paint(object sender, System.Windows.Forms.PaintEventArgs e)
        {
                    
            Point currentPoint = new Point(0, 0);
            Size size = new Size(90,90);
            Pen myPen = new Pen(Color.Black, 3);

            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    currentPoint.X = i * 90;
                    currentPoint.Y = j * 90;
                    Rectangle rect = new Rectangle(currentPoint, size);
                    e.Graphics.DrawRectangle(myPen, rect);

                }
            }



        }
     
    }
}
